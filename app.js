//Ocultar o mostrar div que contiene la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');

//Constantes para agregar elementos a la lista
const addItemInput = document.querySelector('#addItem');//Input
const addItemButton = document.querySelector('button#addItemButton'); //Button

//Eliminar último item
const removeItemButton=document.querySelector('button#removeItemButton');

//Eliminar elemento seleccionado
const removeItem=document.querySelector('button#removeItem');

//Mostrar y ocultar lista
hide.addEventListener('click',() => {
    if (listDiv.style.display == 'none'){
        listDiv.style.display = 'block';
        hide.textContent = '<<';
    } else {
        listDiv.style.display = 'none';
        hide.textContent = '>>';
    }
    });

    //Agregar elementos a la lista
    addItemButton.addEventListener('click', () => {
        let list = document.querySelector('ul');
        let li = document.createElement('li');
        li.textContent = addItemInput.value;
        list.appendChild(li);
        addItemInput.value="";
    });

    //Eliminar último elemento de la lista 
    removeItemButton.addEventListener('click',()  => {
        let list = document.querySelector('ul');
        let li = document.querySelector('li:last-child');
        list.removeChild(li);
    });
    
    //Obtener index del elemento seleccionado
    function findIndex(elem) {
        var i, len = items.length;
        for (i=0; i<len; i++) {
            if (items [i]===elem) {
                return i;
            }
        }
        return -1;
    }

    //Obtener index of element in list
    var list = document.getElementById("listItems"),
        items = list.getElementsByTagName("li");
    list.onclick = function(e) {
        var event = e || window.event,
        src = event.target || event.srcElement;
        var myIndex = findIndex(src);

        //Alert(myIndex);
        index=myIndex;
        console.log(myIndex);

        //Cambiar color del elemento seleccionado
        if (event.target.tagName === 'LI' ) {
            list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-success')); // Se agregan clases Bootstrap para los elementos
            items[index].classList.add('alert','alert-success');
        }
    };

    //Eliminar elemento seleccionado
    removeItem.addEventListener('click', () => {
        let showDiv = document.getElementById('list');
        let divAlert = document.createElement('div');
        let label = document.createElement('label');
        label.innerHTML= 'Se eliminó el elemento ' +index;
        divAlert.classList.add('alert', 'alert-danger'); //Clase de la alerta
       

        items[index].parentNode.removeChild(items[index]);
        divAlert.appendChild(label);
        showDiv.appendChild(divAlert);

        setTimeout(function(){divAlert.remove();},2000)
    });
