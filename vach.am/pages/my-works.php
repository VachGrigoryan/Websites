<?php
/**
 * Template Name: My Works
 */
?>

<?php get_header(); ?>
<section class="my-works-title">
    <h1><?php echo get_field('page_title');?></h1>
    <p><?php echo get_field('under_text');?></p>
</section>
<section class="section-my-works">
    <div class="all-works">
            <?php
            $args = array(
                'post_type' => 'works',
                'posts_per_page' => -1
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
    <div class="show-more-works">
        <button><?php echo get_field('show_more_works');?></button>
    </div>
</section>


<?php get_footer(); ?>