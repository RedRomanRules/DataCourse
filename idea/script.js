const SUPABASE_URL = "https://uriwcxrkuutddxzhdlui.supabase.co";
const SUPABASE_URL = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyaXdjeHJrdXV0ZGR4emhkbHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNTY0MzMsImV4cCI6MjA5MTYzMjQzM30.n3U6UYN6i5V7XhPLy-EFETVLigHBeJmu0h8MjWDawjI"
const db = supa.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadEntries() {

    const {data, error} = await db
        .from('guestbook')
        .select("*")
        .order("created_at", {ascending: false});

    if (error){
        console.error(error);
        return;
    }

    let html = "";
    data.forEach(entry => {
        html += `<div class="entry">
                    <strong>${entry.name</strong>
                    <p>${entry.message}</p>
                    <div class="time">${new Date(entry.created_at).toLocateString()}</div>
                 </div>
                 <button class="del-btn" onclick="deleteEntry(${entry.id)">X</button>
                 
    });
    document.querySelectorAll('#entries').innerHTML = html;
}

async function deleteEntry(id) {
    const {error} = await db
         .from('guestbook')
         .delete()
         .eq('id', id);

    if(error) {
        alert("Error":n" + error.message);
        return;
    }
    loadEntries();


document.querySelector("guest-form").addEventListener("sumbit", async (event) => {

    e.preventDefault();
    
    const nameValue = document.querySelector("#name-input").value;
    const msgvalue = document.querySelector("#msg-input").value;
    
    const {error} = await db
        .from('guestbook')
        .insert([name, nameValue, message: msgValue]);
        
    if (error){    
        alert("Error:" + error.message);
        return;
    }  

    document.querySelector("#name-input").value = "";
    document.querySelector("#msg-input").value = "";
    
    loadEntries();
    
});

loadEntries();


