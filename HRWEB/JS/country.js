const Link = "https://humble-guide-pjg99x7v4qr4c75x4-5095.app.github.dev/country"

fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed to Fetch Data");
    }

return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");

    data.forEach(c=>{

        const row = document.createElement("tr");

        row.innerHTML=`
        
        <td>${c.country_id}</td>
        <td>${c.country_name}</td>
        <td>${c.region_id}</td>
        
        
        
        `;

        tbody.appendChild(row);
        
    
    });
}).catch(err=>{
    console.log(err.message);
});

    
