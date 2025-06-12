<?php
/**
 * Template Name: Home
 */
?>

<?php get_header(); ?>

<!--Section 1-->
<section class="slug-btn">
    <h1><?php echo get_field('slug-button_section')['slug']; ?></h1>
    <button><?php echo get_field('slug-button_section')['explore-btn']; ?><img src="<?php echo get_field('slug-button_section')['arrow_icon']; ?>" alt=""></button>
</section>

<!--Section 2-->
<section class="about-me">
    <div class="about-info">
        <div class="info-txt">
            <p><?php echo get_field('about_section')['lets_get']; ?></p>
            <p><?php echo get_field('about_section')['about_me']; ?></p>
        </div>
        <div class="more-info">
            <button><?php echo get_field('about_section')['about_buuton']; ?></button>
        </div>
    </div>
    <div class="my-photo-items">
        <div class="my-photo">
            <img src="<?php echo get_field('about_section')['my_image']; ?>" alt="">
        </div>
        <div class="photo-items">
            <div></div>
            <div></div>
        </div>
    </div>
</section>

<!--Section 3-->
<section class="section-works">
    <div class="section-title">
        <p><?php echo get_field('works_section')['section_title']; ?></p>
    </div>
    <div class="all-works">
            <?php
                $args = array(
                    'post_type' => 'works',
                    'posts_per_page' => 4
                );
                $query = new WP_Query($args);
                if ($query->have_posts()) :
                    while ($query->have_posts()) : $query->the_post(); ?>
                            <?php if (has_post_thumbnail()) : ?>
                            <div class="works">
                                <?php the_post_thumbnail(); ?>
                                <?php endif; ?>
                                <a href=""><?php the_title(); ?></a>
                            </div>
                <?php endwhile;
                wp_reset_postdata();
                endif;
            ?>
    </div>
</section>

<?php get_footer(); ?>
