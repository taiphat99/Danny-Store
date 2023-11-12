package com.danny_store.model.product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(columnDefinition = "LONGTEXT")
    private String avatar;
    private Double price;
    @Column(name = "price_on_sale")
    private Double priceOnSale;
    @JoinColumn(name = "color_id", referencedColumnName = "id")
    @ManyToOne
    private Color colorId;
    @Column(name = "input_date")
    private Date inputDate;
    @JoinColumn(name = "product_children_id", referencedColumnName = "id")
    @ManyToOne
    private ProductChildrenType productChildrenTypeId;
    @JoinColumn(name = "concept_id",referencedColumnName = "id")
    @ManyToOne
    private Concept conceptId;
}
