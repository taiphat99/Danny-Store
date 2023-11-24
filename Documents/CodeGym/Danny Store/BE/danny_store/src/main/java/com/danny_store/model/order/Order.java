package com.danny_store.model.order;

import com.danny_store.model.user.AppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "order_bill")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Date date;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private AppUser userId;
    @Column(name = "payment_status")
    private boolean paymentStatus = true;
    private String address;
    private String phone;

    public Order(Date date, AppUser userId, boolean paymentStatus, String address, String phone) {
        this.date = date;
        this.userId = userId;
        this.paymentStatus = paymentStatus;
        this.address = address;
        this.phone = phone;
    }
}
