module.exports = function() {
    var client = 'app/';
    var config = {
        client: client,
        //////////////
        sass: client + '**/*.scss',
        css: client + '**/*.css'
    };
    
    return config;
}