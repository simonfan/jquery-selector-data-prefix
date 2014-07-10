//     jquery-selector-data-prefix
//     (c) simonfan
//     jquery-selector-data-prefix is licensed under the MIT terms.

define("jquery-selector-data-prefix",["require","exports","module","jquery","lodash"],function(e){var r=e("jquery"),t=e("lodash");r.expr[":"]["data-prefix"]=function(e,a,n){var u=r(e).data(),o=n[3],d=new RegExp("^"+o+"([A-Z$_].*$)");return t.some(u,function(e,r){return d.test(r)})}});