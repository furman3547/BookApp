function goodreadsCSVConvert(file){  
    const CSVToJSON = csv => {
        const lines = csv.split('\n');
        objectParameters=lines[0].replace( "Author l-f" , "Last,First");
        const keys = objectParameters.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        return lines.slice(1).map(line => {
            return line.split(',').reduce((acc, cur, i) => {
                const toAdd = {};
                toAdd[keys[i]] = cur;
                return { ...acc, ...toAdd };
            }, {});
        });
    };

    const fs= require('fs');
        fs.readFile(file, (err, data)=> {
        if (err) throw err;
    console.log(CSVToJSON(data.toString()));
    });
}
goodreadsCSVConvert("goodreads_library_export.csv");
