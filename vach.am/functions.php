<?php

//Added Styles
function theme_enqueue_styles() {
    wp_enqueue_style( 'theme-style', get_stylesheet_uri() );
    wp_enqueue_style( 'custom-style', get_template_directory_uri() . '/build/css/style.min.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

//Added Scripts
function theme_enqueue_scripts() {
    wp_enqueue_script( 'custom-scripts', get_template_directory_uri() . '/build/js/bundle.min.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts' );

//Added Post type "Works"
function register_works_post_type() {
    register_post_type('works',
        array(
            'labels' => array(
                'name' => __('Works'),
                'singular_name' => __('Work')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'works'),
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'http://localhost/portfolio/wp-content/uploads/2025/05/works.png',
        )
    );
}
add_action('init', 'register_works_post_type');
add_theme_support('post-thumbnails');

