package com.danny_store.service.user;

import com.danny_store.model.user.AppUser;
import org.springframework.security.core.userdetails.UserDetailsService;
import java.util.Optional;

public interface IAppUserService extends UserDetailsService {

    Boolean existsByUsername(String userName);

    Boolean createNewAppUser(AppUser appUser, String role);

    Boolean logout(String userName);

    AppUser findAppUserByUsername(String username);

    Integer findAppUserIdByUsername(String username);

    void updateUser(String name, String phone,String address, Integer user_id);
}
