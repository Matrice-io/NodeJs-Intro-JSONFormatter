const fs = require('fs');

function formatJson() {
    let rawData = fs.readFileSync("./my_dirty_example.json", { encoding:'utf-8', flag:'r' });
    let output = JSON.parse(rawData);
    let formattedData = JSON.stringify(output, null, 2)

    console.log(formattedData);
    fs.writeFileSync("output.json", formattedData)
}
try { 
    formatJson();
} catch (err) {
    console.log(err);
}
