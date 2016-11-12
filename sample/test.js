module.exports = function(str,main,log) { // str = the string, main = server object, log = log function
  /*
  There are three ways you can get command arguments
  
  1. The space-separated way
  str = str.split(" ")
  
  The first argument starts at index 1. So it would be str[1]
  
  2. The parsing way
  str = Util.argsParser(str)
  
  This will parse the args using a specific syntax. So 
  commandname first:hello,secound:just,third:testing --> Object{first:"hello",secound:"just",third:"testing"  }
  
  3. The hybird method
  Want to use both? Then use the splitpoint argument for argsParser. Like so
  
  var space = str.split(" ")
  var parsed = Util.argsParser(str,2) // index in which to begin parsing. Default is 1
  
  
  */
  
}

