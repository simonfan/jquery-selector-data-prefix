//     jquery-selector-data-prefix
//     (c) simonfan
//     jquery-selector-data-prefix is licensed under the MIT terms.

define(["require","exports","module","jquery","lodash"],function(e,t,n){var r=e("jquery"),i=e("lodash");r.expr[":"]["data-prefix"]=function(t,n,s,o){var u=r(t).data(),a=s[3],f=new RegExp("^"+a+"([A-Z$_].*$)");return i.some(u,function(e,t){return f.test(t)})}});