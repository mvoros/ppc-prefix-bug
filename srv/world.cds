using { de.company as bad } from '../db/models/ns1';
using { company as good } from '../db/models/ns2';

service say {
  function hello (to:String) returns String;

  @readonly entity BadLocalExamples              as projection on bad.BadLocExamples;
  @readonly entity BadNonlocalExamples           as projection on bad.BadNonlocExamples;

  @readonly entity GoodLocalExamples              as projection on good.LocExamples;
  @readonly entity GoodNonlocalExamples           as projection on good.NonlocExamples;

}