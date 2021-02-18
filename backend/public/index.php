<?php 

$products = [
  [
    'slug' => 'product-satu',
    'name' => 'Product Satu',
    'description' => 'Satu satunya prouk ternama didunia',
    'image' => '/images/home.jpg'
  ],
  [
    'slug' => 'product-dua',
    'name' => 'Product Dua Lupa',
    'description' => 'Dia lupa dua lupa sama-sama oke',
    'image' => '/images/about.jpg'
  ],
  [
    'slug' => 'product-tiga',
    'name' => 'Product Tiga',
    'description' => 'Tiga tiga sayang siapa ya?',
    'image' => '/images/home.jpg'
  ],
];

echo json_encode($products);