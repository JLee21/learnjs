/***
 * Excerpted from "Serverless Single Page Apps",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/brapps for more book information.
***/
onmessage = function(e) {
  try {
    postMessage(eval(e.data));
  } catch(e) {
    postMessage(false);
  }
}
