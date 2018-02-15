var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have working subtract button', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number6')).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number4')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('2');
   });

   it('should have working add button', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number6')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('10');
    });

    it('should have working multiply button', function(){
       running_total = element(by.css('#running_total'))
       element(by.css('#number6')).click();
       element(by.css('#operator_multiply')).click();
       element(by.css('#number4')).click();
       element(by.css('#operator_equals')).click();
       expect(running_total.getAttribute('value')).to.eventually.equal('24');
     });

     it('should have working divide button', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number6')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number3')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('2');
      });

      it('should have multiple operators chained together', function(){
         running_total = element(by.css('#running_total'))
         element(by.css('#number6')).click();
         element(by.css('#operator_divide')).click();
         element(by.css('#number3')).click();
         element(by.css('#operator_add')).click();
         element(by.css('#number3')).click();
         element(by.css('#operator_multiply')).click();
         element(by.css('#number3')).click();
         element(by.css('#operator_subtract')).click();
         element(by.css('#number1')).click();
         element(by.css('#number5')).click();
         element(by.css('#operator_equals')).click();
         expect(running_total.getAttribute('value')).to.eventually.equal('0');
       });

       it('should work with very large numbers', function(){
          running_total = element(by.css('#running_total'));
          element(by.css('#number6')).click();
          element(by.css('#number0')).click();
          element(by.css('#number0')).click();
          element(by.css('#number0')).click();
          element(by.css('#operator_multiply')).click();
          element(by.css('#number3')).click();
          element(by.css('#number3')).click();
          element(by.css('#number1')).click();
          element(by.css('#number5')).click();
          element(by.css('#operator_equals')).click();
          expect(running_total.getAttribute('value')).to.eventually.equal('19890000');
        });

        it('should work with negative numbers', function() {
          running_total = element(by.css('#running_total'));
          element(by.css('#number6')).click();
          element(by.css('#operator_subtract')).click();
          element(by.css('#number3')).click();
          element(by.css('#number3')).click();
          element(by.css('#operator_equals')).click();
          expect(running_total.getAttribute('value')).to.eventually.equal('-27');
        });
});
