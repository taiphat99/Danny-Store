package com.danny_store.controller.user;


import com.danny_store.config.JwtTokenUtil;
import com.danny_store.dto.user.AppUserDto;
import com.danny_store.model.user.AppUser;
import com.danny_store.model.user.JwtResponse;
import com.danny_store.service.user.IAppUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class AppUserController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private IAppUserService appUserService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private static final String LOGIN_FAILED = "Đăng nhập thất bại";

    @PostMapping("/login-by-username")
    public ResponseEntity<Object> loginByAccount(@Valid @RequestBody AppUserDto appUserDto,
                                                 BindingResult bindingResult) {

        new AppUserDto().validate(appUserDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(LOGIN_FAILED);
        }
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    appUserDto.getUsername(), appUserDto.getPassword()));
        } catch (DisabledException e) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Tài khoản của bạn đã bị vô hiệu hoá");
        } catch (BadCredentialsException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(LOGIN_FAILED);
        }

        AppUser appUser = new AppUser();

        BeanUtils.copyProperties(appUserDto, appUser);

        UserDetails userDetails = appUserService.loadUserByUsername(appUser.getUsername());

        String jwtToken = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity
                .ok()
                .body(new JwtResponse(jwtToken));
    }

    @PostMapping("/register-by-customer")
    public ResponseEntity<Object> registerByCustomer(@Valid @RequestBody AppUserDto appUserDto,
                                                     BindingResult bindingResult) {
        new AppUserDto().validate(appUserDto, bindingResult);
        Map<String, String> errorsMap = new HashMap<>();
        if (bindingResult.hasErrors()) {
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                errorsMap.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return ResponseEntity
                    .status(HttpStatus.NOT_ACCEPTABLE)
                    .body(errorsMap);
        }
        boolean existsByUsername = appUserService.existsByUsername(appUserDto.getUsername());
        if (existsByUsername) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("Tài khoản này đã tồn tại");
        }

        AppUser appUser = new AppUser();
        BeanUtils.copyProperties(appUserDto, appUser);
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        Boolean checkAddNewAppUser = appUserService.createNewAppUser(appUser, "ROLE_CUSTOMER");
        if (Boolean.FALSE.equals(checkAddNewAppUser)) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Đăng ký thất bại, vui lòng chờ trong giây lát");
        }
        return ResponseEntity.ok("Đăng ký thành công, vui lòng bấm nút đăng nhập");
    }

    @GetMapping("/logout/{userName}")
    public ResponseEntity<Object> logout(@PathVariable String userName) {
        boolean logout = appUserService.logout(userName);
        if (logout) {
            return ResponseEntity.ok("Đăng xuất thành công");
        }
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Đăng xuất thất bại, vui lòng chờ trong giây lát");
    }
    @GetMapping("/get-app-user/{username}")
    public ResponseEntity<AppUser> getAppUserByUsername(@PathVariable String username){
        AppUser appUser = appUserService.findAppUserByUsername(username);
        if(appUser!= null){
            return new ResponseEntity<>(appUser,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    @GetMapping("/get-app-user-id/{username}")
    public ResponseEntity<Integer> getAppUserIdByUsername(@PathVariable String username){
        Integer id = appUserService.findAppUserIdByUsername(username);
        if(id!= null){
            return new ResponseEntity<>(id,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/update-user-info")
    public ResponseEntity<?> updateUser(@RequestBody AppUserDto appUserDto){
        appUserService.updateUser(appUserDto.getName(),appUserDto.getPhone(),appUserDto.getAddress(),appUserDto.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
