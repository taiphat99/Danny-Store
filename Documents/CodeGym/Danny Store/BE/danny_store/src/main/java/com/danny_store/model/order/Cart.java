package com.danny_store.model.order;

import com.danny_store.model.product.Product;
import com.danny_store.model.product.Size;
import com.danny_store.model.user.AppUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    @ManyToOne
    private Product productId;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private AppUser userId;
    @ManyToOne
    @JoinColumn(name = "size_id", referencedColumnName = "id")
    private Size sizeId;
    private Integer quantity;
    private Double price;
}
