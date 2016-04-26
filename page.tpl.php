  
   <div id = "header">
     <?php print render($page['header']); ?>
</div>
   <div id= "content">
    <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
    <?php print $messages; ?>  
    <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?> 
   <?php print render($page['content']); ?>
</div>
      

    