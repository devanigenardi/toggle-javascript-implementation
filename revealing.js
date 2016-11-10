var elememnt = document.getElementsByClassName('class1');
var toggle = (function(){
    
    var private = function(){
        
        
    };
    
    var public = function(){
        
            function toggleclass(){
                for (var i = 0; i < elememnt.length; i++){
                elememnt[i].addEventListener("click", function(){
                    if(this.className == "class1"){
                        this.className = "class2";
                    } else {
                        this.className = "class1";
                    }
                });
            }
                
        }
        toggleclass();
        
    };
    
    return {
        public: public
    }
    
})();

toggle.public();



