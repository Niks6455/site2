"use strict"


document.addEventListener('DOMContentLoaded', function(){
    //получаем инпут в file в переменную
    const formImage = document.getElementById('formImage')
     //получаем div для превью в переменную
    const formPreview = document.getElementById('formPreview') 
    

    //слушаем изменения в инпуте  file

    formImage.addEventListener('change', ()=>{
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file){
        //проверяем тип файла
        if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)){
            alert('Разрешены только изображения.');
            formImage.value = '';
            return;
        }
        //проверим размер файла (<2мб)
        if(file.size > 2*1024*1024){
            alert('Файл должен быть менее 2 МБ.');
            return;
        }
        //то что ниже реализует отображение картинки на сайте
        var reader = new FileReader();
        reader.onload = function(e){
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
        };
        reader.onerror = function(e){
            alert('Ошибка')
        };
        reader.readAsDataURL(file);
    }
});
