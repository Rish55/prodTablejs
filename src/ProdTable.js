array=[];

function Function () {
    var id = document.getElementById('ID').value;
    var price = document.getElementById('Price').value;
    var name = document.getElementById('Name').value;
    console.log("correct");
    logic (id, price, name);
    display(array);
}

function logic(id, price, name) 
{
    for (var i = 0; i < array.length; i++)
    {
        console.log(array[i]);
        if (array[i].id == id)
        {
            alert("YOUR ID IS SAME");
            return;
        }
    }
    obj = {};
    obj["id"] = id;
    obj["name"] = name;
    obj["Price"] = price; 
    array.push(obj);
}

function display(result) {
    var text=document.getElementById("table1");
    text.innerHTML="<tr>\
    <th>Product Id</th>\
    <th>Product Name</th>\
    <th>Product Price</th>\
    </tr>";
    for (let i=0; i<result.length; i++) {
        text.innerHTML+='<tr>\
        <td>' + result[i].id + '</td>\
        <td>' + result[i].name + '</td>\
        <td>' + result[i].Price + '</td>\
    </tr>';
    }
}
