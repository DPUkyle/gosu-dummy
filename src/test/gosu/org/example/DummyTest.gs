package org.example

uses org.junit.jupiter.api.Assertions
uses org.junit.jupiter.api.Test

class DummyTest {

  @Test
  function runIt() {
    var d = new Dummy()
    d.doIt()

//    Assertions.fail("on purpose")
  }

}