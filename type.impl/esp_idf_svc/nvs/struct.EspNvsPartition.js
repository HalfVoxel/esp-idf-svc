(function() {var type_impls = {
"esp_idf_svc":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-EspNvsPartition%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#241-248\">source</a><a href=\"#impl-Clone-for-EspNvsPartition%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Clone for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"esp_idf_svc/nvs/trait.NvsPartitionId.html\" title=\"trait esp_idf_svc::nvs::NvsPartitionId\">NvsPartitionId</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#245-247\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"since rightside\" title=\"Stable since Rust version 1.0.0\">1.0.0</span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a>Read more</a></div></details></div></details>","Clone","esp_idf_svc::nvs::EspDefaultNvsPartition","esp_idf_svc::nvs::EspCustomNvsPartition","esp_idf_svc::nvs::EspEncryptedNvsPartition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-EspNvsPartition%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#217\">source</a><a href=\"#impl-Debug-for-EspNvsPartition%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: Debug + <a class=\"trait\" href=\"esp_idf_svc/nvs/trait.NvsPartitionId.html\" title=\"trait esp_idf_svc::nvs::NvsPartitionId\">NvsPartitionId</a>&gt; Debug for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#217\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Debug","esp_idf_svc::nvs::EspDefaultNvsPartition","esp_idf_svc::nvs::EspCustomNvsPartition","esp_idf_svc::nvs::EspEncryptedNvsPartition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EspNvsPartition%3CNvsCustom%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#226-230\">source</a><a href=\"#impl-EspNvsPartition%3CNvsCustom%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;<a class=\"struct\" href=\"esp_idf_svc/nvs/struct.NvsCustom.html\" title=\"struct esp_idf_svc::nvs::NvsCustom\">NvsCustom</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.take\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#227-229\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html#tymethod.take\" class=\"fn\">take</a>(partition: &amp;str) -&gt; Result&lt;Self, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section></div></details>",0,"esp_idf_svc::nvs::EspCustomNvsPartition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EspNvsPartition%3CNvsDefault%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#220-224\">source</a><a href=\"#impl-EspNvsPartition%3CNvsDefault%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;<a class=\"struct\" href=\"esp_idf_svc/nvs/struct.NvsDefault.html\" title=\"struct esp_idf_svc::nvs::NvsDefault\">NvsDefault</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.take\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#221-223\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html#tymethod.take\" class=\"fn\">take</a>() -&gt; Result&lt;Self, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section></div></details>",0,"esp_idf_svc::nvs::EspDefaultNvsPartition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EspNvsPartition%3CNvsEncrypted%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#232-239\">source</a><a href=\"#impl-EspNvsPartition%3CNvsEncrypted%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;<a class=\"struct\" href=\"esp_idf_svc/nvs/struct.NvsEncrypted.html\" title=\"struct esp_idf_svc::nvs::NvsEncrypted\">NvsEncrypted</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.take\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#233-238\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html#tymethod.take\" class=\"fn\">take</a>(\n    partition: &amp;str,\n    keys_partition: Option&lt;&amp;str&gt;,\n) -&gt; Result&lt;Self, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section></div></details>",0,"esp_idf_svc::nvs::EspEncryptedNvsPartition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawHandle-for-EspNvsPartition%3CNvsCustom%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#250-256\">source</a><a href=\"#impl-RawHandle-for-EspNvsPartition%3CNvsCustom%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_svc/handle/trait.RawHandle.html\" title=\"trait esp_idf_svc::handle::RawHandle\">RawHandle</a> for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;<a class=\"struct\" href=\"esp_idf_svc/nvs/struct.NvsCustom.html\" title=\"struct esp_idf_svc::nvs::NvsCustom\">NvsCustom</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" class=\"associatedtype\">Handle</a> = *const u8</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#253-255\">source</a><a href=\"#method.handle\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_svc/handle/trait.RawHandle.html#tymethod.handle\" class=\"fn\">handle</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" title=\"type esp_idf_svc::handle::RawHandle::Handle\">Handle</a></h4></section></summary><div class='docblock'>Care should be taken to use the returned ESP-IDF driver raw handle only while\nthe driver is still alive, so as to avoid use-after-free errors.</div></details></div></details>","RawHandle","esp_idf_svc::nvs::EspCustomNvsPartition"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawHandle-for-EspNvsPartition%3CNvsEncrypted%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#258-264\">source</a><a href=\"#impl-RawHandle-for-EspNvsPartition%3CNvsEncrypted%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_svc/handle/trait.RawHandle.html\" title=\"trait esp_idf_svc::handle::RawHandle\">RawHandle</a> for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;<a class=\"struct\" href=\"esp_idf_svc/nvs/struct.NvsEncrypted.html\" title=\"struct esp_idf_svc::nvs::NvsEncrypted\">NvsEncrypted</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" class=\"associatedtype\">Handle</a> = *const u8</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#261-263\">source</a><a href=\"#method.handle\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_svc/handle/trait.RawHandle.html#tymethod.handle\" class=\"fn\">handle</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" title=\"type esp_idf_svc::handle::RawHandle::Handle\">Handle</a></h4></section></summary><div class='docblock'>Care should be taken to use the returned ESP-IDF driver raw handle only while\nthe driver is still alive, so as to avoid use-after-free errors.</div></details></div></details>","RawHandle","esp_idf_svc::nvs::EspEncryptedNvsPartition"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()