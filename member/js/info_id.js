function dropinfo()
{
    document.getElementById('info_content').style.display='table-row-group';
    document.getElementById('info_stat').style.display='table-row-group';
    document.getElementById('info_open').style.display='none';

}
function drop_pop(name)
{
    if(document.getElementById(name).style.display=='none')
    {
        document.getElementById(name).style.display='block';
    }
    else
    {
        document.getElementById(name).style.display='none';
    }
}