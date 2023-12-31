package com.danny_store.model.product;

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
public class ProductSize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product productId;
    @ManyToOne
    @JoinColumn(name = "size_id", referencedColumnName = "id")
    private Size sizeId;

}
