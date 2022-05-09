pragma circom 2.0.0;

template Multiplier2(){
     signal input a;
     signal input b;
     signal output c;

     c <== a * b;
}



//This circuit multiplies in1, in2, and in3.
template Multiplier3 () {
   //Declaration of signals and components.
   signal input a;
   signal input b;
   signal input c;
   signal output out;
   component mult1 = Multiplier2();
   component Multiplier2 = Multiplier2();

   //Statements.
   mult1.a <== a;
   mult1.b <== b;
   Multiplier2.a <== mult1.c;
   Multiplier2.b <== c;
   out <== Multiplier2.c;
}

component main = Multiplier3();