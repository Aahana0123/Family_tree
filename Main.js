var images=
["As.jpeg", "ah.jpeg", "sa.jpeg", "Ak.jpeg"];
var names= ["family book", "Aashna", "Aahana", "Sahana", "Aravinda Kumar"];
var i=0;
function update(){
    i++;
    var numbers_of_family_members_in_array = 4;
    if(i> numbers_of_family_members_in_array)
    {
        i=0;
    }

    var updatedimage= images[i];
    var updatedname= names[i];
    document.getElementById("family_member_image").src=updatedimage;
    document.getElementById("family_member_name").src=updatedname;
}