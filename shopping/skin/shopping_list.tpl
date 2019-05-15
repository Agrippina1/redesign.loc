
<div class="contentainer-products_all">
    <h3 class="headers headers_{skin_name}">{shopping_item_name}</h3>
    <a href="add.php" class="menu-item bc_{skin_name}" role="button"><img src='{skin_folder}/pics/answer.gif' width='16' height='16' border='0' alt='' /> добавить объ€вление</a>
    {shopping_pages}
    <ul class="products_all" aria-label="{shopping_item_name}">
<!-- BEGIN DYNAMIC BLOCK: shopping_list_block -->
        <li class="skin_{skin_name}">
            <a href="show.php?id={shopping_id}" target="_top" title="">
                <div class="product_item" style="background-image: url({shopping_photo});"></div>
                <p><span class="title">{shopping_title}</span><br>{shopping_short}</p>
            </a>
        </li>
<!-- END DYNAMIC BLOCK: shopping_list_block -->
    </ul>
    {shopping_pages}
    <a href="add.php" class="menu-item bc_{skin_name}" role="button"><img src='{skin_folder}/pics/answer.gif' width='16' height='16' border='0' alt='' /> добавить объ€вление</a>
</div>

