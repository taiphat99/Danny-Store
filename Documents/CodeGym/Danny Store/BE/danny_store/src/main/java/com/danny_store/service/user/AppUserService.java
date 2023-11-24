package com.danny_store.service.user;

import com.danny_store.model.user.AppUser;
import com.danny_store.dto.user.JwtResponseUserDetail;
import com.danny_store.model.user.UserRole;
import com.danny_store.repository.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class AppUserService implements IAppUserService {
    @Autowired
    private IAppUserRepository appUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = appUserRepository.findAppUserByUsername(username);
        if (appUser == null) {
            throw new UsernameNotFoundException("Username or password is wrong");
        }

        List<GrantedAuthority> grantList = new ArrayList<>();
        for (UserRole userRole : appUser.getUserRoles()) {
            grantList.add(new SimpleGrantedAuthority(userRole.getAppRole().getNameRole()));
        }
        UserDetails userDetails = new JwtResponseUserDetail(
                appUser.getUsername(),
                appUser.getPassword(),
                appUser.getFlagOnline(),
                grantList);
        appUserRepository.updateAppUserIsOnline(appUser);
        return userDetails;
    }

    @Override
    public Boolean existsByUsername(String userName) {
        AppUser appUser = appUserRepository.findAppUserByUsername(userName);
        return appUser != null;
    }

    @Override
    public Boolean createNewAppUser(AppUser appUser, String role) {
        Integer amountAppUserCreated = appUserRepository.createNewAppUser(appUser);
        AppUser currentAppUser = appUserRepository.findAppUserByUsername(appUser.getUsername());
        appUserRepository.insertRoleForCustomer(2, currentAppUser.getId());
        return amountAppUserCreated > 0;
    }

    @Override
    public Boolean logout(String userName) {
        return appUserRepository.updateAppUserIsOffline(userName) > 0;
    }

    @Override
    public AppUser findAppUserByUsername(String username) {
        return appUserRepository.findAppUserByUsername(username);
    }

    @Override
    public Integer findAppUserIdByUsername(String username) {
        return appUserRepository.findIdByUserName(username);
    }

    @Override
    public void updateUser(String name, String phone, String address, Integer user_id) {
        appUserRepository.updateUserInfo(name, phone, address, user_id);
    }

}
