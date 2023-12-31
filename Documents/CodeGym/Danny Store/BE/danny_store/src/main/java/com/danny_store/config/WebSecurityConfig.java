package com.danny_store.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    @Autowired
    private UserDetailsService jwtUserDetailService;
    @Autowired
    private JwtRequestFilter jwtRequestFilter;


    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(jwtUserDetailService).passwordEncoder(new BCryptPasswordEncoder());
    }


    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();

    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable().cors().and()//
                .authorizeRequests()//
                .antMatchers(
                        "/api/user/create/**",
                        "/api/admin/home/**",
                        "/api/user/confirm/**",
                        "/api/user/resetOTP/**",
                        "/api/user/login-by-username/**",
                        "/api/user/register-by-customer"
                ).permitAll()

//                .antMatchers(
//                        "/api/user/information/**",
//                        "/api/user/logout/{userName}/**"
//                ).hasAnyAuthority("ROLE_ADMIN", "ROLE_SALE", "ROLE_BUSINESS", "ROLE_WAREHOUSE")//
//
//
//                .antMatchers(
//                        "/api/admin/sale/**"
//                ).hasAnyAuthority("ROLE_SALE", "ROLE_ADMIN")
//
//                .antMatchers(
//                        "/api/admin/business/product/list/**",
//                        "/api/admin/business/customer/list/**",
//                        "/api/admin/business/type/list/**"
//                ).hasAnyAuthority("ROLE_SALE", "ROLE_ADMIN", "ROLE_BUSINESS")


                .anyRequest()//
                .authenticated()
                .and()//
                .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)//
                .and().
                sessionManagement()//
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

    }

}