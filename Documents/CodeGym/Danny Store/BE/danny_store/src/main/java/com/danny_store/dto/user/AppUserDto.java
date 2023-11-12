package com.danny_store.dto.user;

import com.danny_store.common.ValidateAppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;



@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AppUserDto implements Validator {

    private Long id;
    private String username;
    private String password;
    private String phone;
    private String address;
    private boolean gender = true;
    private Boolean flagOnline;
    private Boolean flagDeleted;


    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        AppUserDto appUserDto = (AppUserDto) target;
        ValidateAppUser.checkValidateAppUserName(appUserDto.getUsername(),errors);
        ValidateAppUser.checkValidateAppUserPassword(appUserDto.getPassword(),errors);
    }
}
