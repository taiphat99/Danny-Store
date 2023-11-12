package com.danny_store.repository;

import com.danny_store.model.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface IAppUserRepository extends JpaRepository<AppUser, Integer> {

    @Transactional
    @Query(value = "SELECT * FROM app_user WHERE " +
            "username = :name and flag_deleted = 0", nativeQuery = true)
    AppUser findAppUserByName(@Param("name") String userName);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO app_user( username, `password`," +
            "flag_deleted,flag_online) " +
            "VALUES (:#{#appUser.username}, :#{#appUser.password},0,0) ", nativeQuery = true)
    Integer createNewAppUser(AppUser appUser);

    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user set flag_online = 1 WHERE id = :#{#appUser.id}", nativeQuery = true)
    Integer updateAppUserIsOnline(AppUser appUser);

    @Modifying
    @Transactional
    @Query(value = "UPDATE app_user set flag_online = 0 WHERE username = :userName", nativeQuery = true)
    Integer updateAppUserIsOffline(@Param("userName") String userName);

    @Query(value = "SELECT au.id from app_user au WHERE au.username = :userName", nativeQuery = true)
    Long findIdByUserName(@Param("userName") String userName);

    @Query(value = " select r.id from app_role r where r.name_role = :nameRole ", nativeQuery = true)
    Long findAppRoleIdByName(@Param("nameRole") String nameRole);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO user_role (app_role_id,app_user_id) VALUES (:roleId, :id)", nativeQuery = true)
    void insertRoleForCustomer(Integer roleId, Integer id);

}
