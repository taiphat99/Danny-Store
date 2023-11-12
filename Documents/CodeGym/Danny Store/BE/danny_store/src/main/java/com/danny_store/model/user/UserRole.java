package com.danny_store.model.user;

import com.danny_store.model.user.AppRole;
import com.danny_store.model.user.AppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "app_user_id", referencedColumnName = "id")
    private AppUser appUser;
    @ManyToOne
    @JoinColumn(name = "app_role_id", referencedColumnName = "id")
    private AppRole appRole;

}
