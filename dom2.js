var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    // Get input value
    var newItem1 = document.getElementById('item1').value;
    var newItem2 = document.getElementById('item2').value;
    var newItem3 = document.getElementById('item3').value;
    var all = "Name:"+newItem1+",Emailid:"+newItem2+",Phonenumber:"+newItem3
    //add to local storage 
    let user = localStorage.setItem(newItem2,all);
     
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(all));
    // li.appendChild(document.createTextNode(newItem2));
    // li.appendChild(document.createTextNode(newItem3));
    // Create del button element
    var deleteBtn = document.createElement('button');
   
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));

    // Append button to li
    li.appendChild(deleteBtn);
    
    // Append li to list
    itemList.appendChild(li);
  }
function removeItem(e){
    var newItem2 = document.getElementById('item2').value;
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
        let user =localStorage.removeItem(newItem2)
      }
    }
  }


//   function filterItems(e){
//     // convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     // Get lis
//     var items = itemList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function(item){
//       var itemName = item.firstChild.textContent;
//       var description = item.childNodes[1].textContent;
//       if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }