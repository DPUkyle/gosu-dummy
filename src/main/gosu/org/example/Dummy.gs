package org.example

class Dummy {

    static function main(args : String[]) {
        new Dummy().doIt()
    }

    function doIt() {
      var list = { "one", "two", "three" } // Creates a java.lang.List<String>
      var ref : String = "intentionally create inspection GS-002"
      for ( num in list ) {
        print( num )
      }
    }

}