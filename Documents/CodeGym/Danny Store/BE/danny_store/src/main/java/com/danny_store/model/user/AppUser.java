package com.danny_store.model.user;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String username;
    private String phone;
    private String address;
    private Boolean gender = true;
    private String password;
    private Boolean flagOnline;
    private Boolean flagDeleted;
    private static final int OTP_VALID_DURATION = 5 * 60 * 1000;   // 5 minutes
    @JsonBackReference
    @OneToMany(mappedBy = "appUser",fetch = FetchType.EAGER)
    private Set<UserRole> userRoles;

}
