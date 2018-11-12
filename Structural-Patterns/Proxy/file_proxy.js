class FS_PROXY {

    constructor(fs_subject){
        this.fs = fs_subject;
    }

    readFile(path,format, callback) {
        if( path.match( /.md$|.MD$/ ) ) {

            return callback(new Error('Cannot Read Files except .md'),null);

        }

        this.fs.readFile(path, format, (error, contents) => {
            if(error){
                console.log(error);
                return callback(error,null);
            }
            else{
                
                return callback(null, contents);
            }
        } )
    }


}

module.exports = FS_PROXY;