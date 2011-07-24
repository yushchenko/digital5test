# Digital 5 Test, a rainy weekend.

## From yesterday's G+

* Several answers for a question - memory vs processor.
* Code Review of the questions itself.
* Use JavaScript instead of C#.
* Thanks for fun.
* Use bright colours (markers).
* Send this log with the pictures.
* Create micro project in Git repository.

## 1. Fibonacci Sequence, C#, performance (no reqursion)

I used to know C# but now JavaScript seems better for me to play with algorithms.
I also love recursion and will try to avoid its obvious drawback for this calculation.

Use http://pivotal.github.com/jasmine/.
Check performance in http://jsperf.com/, provide sample URL's.
http://jsperf.com/fibonacii-numbers-for-digital5-test

Write down only one sample, replace C# function definition with JavaScript one.

## 2. SQL, join vs exists

If I were asked to code review: 
1. No contractions, full names only.
2. lower|Upper Camel Case, please.

Disclaimer:
Last time when I wrote a serious SQL was about 4 years ago.
In theory, the code below should work but I have never run it, sorry for that.

## 3. JavaScript, parsing query string

Make the function sutable for unit tests using an extra parameter.
Create separate runner to test with real query params.

## 4. WAP Sites.

Unfortunately, I have a very vague idea what WAP sites are.
Some kind of web for simple mobile phones...
Yep, I could google and find out more
but I strongly believe that you are interested in my real experience not in the copy-paste skill.
So it makes perfect sense for me to skip this question.

## 5. Architecture

Draw a kind of diagram to show several different approaches and connections between them.

* Make It Scalable
  Web Farm --(select one)-- Cloud
  A Cloud Solution like Google App Engine

* Cache on Several Levels
  client: browser memory
  application: use a framework like Velocity for .Net
  DB: denormalize when appropriate --(or go here)-> NoSQL DB

* Minimize Traffic
  crunch JavaScript, CSS, HTML --(pay less for traffic)-> CDN
  use sprites for images
  reduce amount of XHRs

* CDN

* NoSQL DB  <-(can be only one choise)-- Cloud



