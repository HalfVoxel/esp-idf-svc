(function() {var type_impls = {
"esp_idf_svc":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-EspNvs%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#770-778\">source</a><a href=\"#impl-Drop-for-EspNvs%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"esp_idf_svc/nvs/trait.NvsPartitionId.html\" title=\"trait esp_idf_svc::nvs::NvsPartitionId\">NvsPartitionId</a>&gt; Drop for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvs.html\" title=\"struct esp_idf_svc::nvs::EspNvs\">EspNvs</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#771-777\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a>Read more</a></div></details></div></details>","Drop","esp_idf_svc::nvs::EspDefaultNvs","esp_idf_svc::nvs::EspCustomNvs","esp_idf_svc::nvs::EspEncryptedNvs"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EspNvs%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#273-768\">source</a><a href=\"#impl-EspNvs%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"esp_idf_svc/nvs/trait.NvsPartitionId.html\" title=\"trait esp_idf_svc::nvs::NvsPartitionId\">NvsPartitionId</a>&gt; <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvs.html\" title=\"struct esp_idf_svc::nvs::EspNvs\">EspNvs</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#274-311\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.new\" class=\"fn\">new</a>(\n    partition: <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvsPartition.html\" title=\"struct esp_idf_svc::nvs::EspNvsPartition\">EspNvsPartition</a>&lt;T&gt;,\n    namespace: &amp;str,\n    read_write: bool,\n) -&gt; Result&lt;Self, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.contains\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#313-315\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.contains\" class=\"fn\">contains</a>(&amp;self, name: &amp;str) -&gt; Result&lt;bool, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.remove\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#317-331\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;mut self, name: &amp;str) -&gt; Result&lt;bool, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#367-430\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_raw\" class=\"fn\">get_raw</a>&lt;'a&gt;(\n    &amp;self,\n    name: &amp;str,\n    buf: &amp;'a mut [u8],\n) -&gt; Result&lt;Option&lt;&amp;'a [u8]&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_raw\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#432-456\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_raw\" class=\"fn\">set_raw</a>(&amp;mut self, name: &amp;str, buf: &amp;[u8]) -&gt; Result&lt;bool, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.blob_len\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#458-473\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.blob_len\" class=\"fn\">blob_len</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;usize&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_blob\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#475-499\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_blob\" class=\"fn\">get_blob</a>&lt;'a&gt;(\n    &amp;self,\n    name: &amp;str,\n    buf: &amp;'a mut [u8],\n) -&gt; Result&lt;Option&lt;&amp;'a [u8]&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_blob\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#501-512\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_blob\" class=\"fn\">set_blob</a>(&amp;mut self, name: &amp;str, buf: &amp;[u8]) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.str_len\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#514-529\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.str_len\" class=\"fn\">str_len</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;usize&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_str\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#531-553\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_str\" class=\"fn\">get_str</a>&lt;'a&gt;(\n    &amp;self,\n    name: &amp;str,\n    buf: &amp;'a mut [u8],\n) -&gt; Result&lt;Option&lt;&amp;'a str&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_str\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#555-567\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_str\" class=\"fn\">set_str</a>(&amp;mut self, name: &amp;str, val: &amp;str) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_u8\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#569-582\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_u8\" class=\"fn\">get_u8</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;u8&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_u8\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#584-592\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_u8\" class=\"fn\">set_u8</a>(&amp;self, name: &amp;str, val: u8) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_i8\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#594-607\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_i8\" class=\"fn\">get_i8</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;i8&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_i8\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#609-617\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_i8\" class=\"fn\">set_i8</a>(&amp;self, name: &amp;str, val: i8) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_u16\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#619-632\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_u16\" class=\"fn\">get_u16</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;u16&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_u16\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#634-642\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_u16\" class=\"fn\">set_u16</a>(&amp;self, name: &amp;str, val: u16) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_i16\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#644-657\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_i16\" class=\"fn\">get_i16</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;i16&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_i16\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#659-667\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_i16\" class=\"fn\">set_i16</a>(&amp;self, name: &amp;str, val: i16) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_u32\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#669-682\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_u32\" class=\"fn\">get_u32</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;u32&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_u32\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#684-692\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_u32\" class=\"fn\">set_u32</a>(&amp;self, name: &amp;str, val: u32) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_i32\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#694-707\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_i32\" class=\"fn\">get_i32</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;i32&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_i32\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#709-717\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_i32\" class=\"fn\">set_i32</a>(&amp;self, name: &amp;str, val: i32) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_u64\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#719-732\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_u64\" class=\"fn\">get_u64</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;u64&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_u64\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#734-742\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_u64\" class=\"fn\">set_u64</a>(&amp;self, name: &amp;str, val: u64) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.get_i64\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#744-757\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.get_i64\" class=\"fn\">get_i64</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;i64&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.set_i64\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#759-767\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/nvs/struct.EspNvs.html#tymethod.set_i64\" class=\"fn\">set_i64</a>(&amp;self, name: &amp;str, val: i64) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section></div></details>",0,"esp_idf_svc::nvs::EspDefaultNvs","esp_idf_svc::nvs::EspCustomNvs","esp_idf_svc::nvs::EspEncryptedNvs"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawHandle-for-EspNvs%3CNvsCustom%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#782-788\">source</a><a href=\"#impl-RawHandle-for-EspNvs%3CNvsCustom%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_svc/handle/trait.RawHandle.html\" title=\"trait esp_idf_svc::handle::RawHandle\">RawHandle</a> for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvs.html\" title=\"struct esp_idf_svc::nvs::EspNvs\">EspNvs</a>&lt;<a class=\"struct\" href=\"esp_idf_svc/nvs/struct.NvsCustom.html\" title=\"struct esp_idf_svc::nvs::NvsCustom\">NvsCustom</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" class=\"associatedtype\">Handle</a> = u32</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#785-787\">source</a><a href=\"#method.handle\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_svc/handle/trait.RawHandle.html#tymethod.handle\" class=\"fn\">handle</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" title=\"type esp_idf_svc::handle::RawHandle::Handle\">Handle</a></h4></section></summary><div class='docblock'>Care should be taken to use the returned ESP-IDF driver raw handle only while\nthe driver is still alive, so as to avoid use-after-free errors.</div></details></div></details>","RawHandle","esp_idf_svc::nvs::EspCustomNvs"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawHandle-for-EspNvs%3CNvsEncrypted%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#789-795\">source</a><a href=\"#impl-RawHandle-for-EspNvs%3CNvsEncrypted%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"esp_idf_svc/handle/trait.RawHandle.html\" title=\"trait esp_idf_svc::handle::RawHandle\">RawHandle</a> for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvs.html\" title=\"struct esp_idf_svc::nvs::EspNvs\">EspNvs</a>&lt;<a class=\"struct\" href=\"esp_idf_svc/nvs/struct.NvsEncrypted.html\" title=\"struct esp_idf_svc::nvs::NvsEncrypted\">NvsEncrypted</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" class=\"associatedtype\">Handle</a> = u32</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#792-794\">source</a><a href=\"#method.handle\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"esp_idf_svc/handle/trait.RawHandle.html#tymethod.handle\" class=\"fn\">handle</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"esp_idf_svc/handle/trait.RawHandle.html#associatedtype.Handle\" title=\"type esp_idf_svc::handle::RawHandle::Handle\">Handle</a></h4></section></summary><div class='docblock'>Care should be taken to use the returned ESP-IDF driver raw handle only while\nthe driver is still alive, so as to avoid use-after-free errors.</div></details></div></details>","RawHandle","esp_idf_svc::nvs::EspEncryptedNvs"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawStorage-for-EspNvs%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#809-821\">source</a><a href=\"#impl-RawStorage-for-EspNvs%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"esp_idf_svc/nvs/trait.NvsPartitionId.html\" title=\"trait esp_idf_svc::nvs::NvsPartitionId\">NvsPartitionId</a>&gt; <a class=\"trait\" href=\"embedded_svc/storage/trait.RawStorage.html\" title=\"trait embedded_svc::storage::RawStorage\">RawStorage</a> for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvs.html\" title=\"struct esp_idf_svc::nvs::EspNvs\">EspNvs</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#810-812\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_svc/storage/trait.RawStorage.html#tymethod.len\" class=\"fn\">len</a>(&amp;self, name: &amp;str) -&gt; Result&lt;Option&lt;usize&gt;, Self::<a class=\"associatedtype\" href=\"embedded_svc/storage/trait.StorageBase.html#associatedtype.Error\" title=\"type embedded_svc::storage::StorageBase::Error\">Error</a>&gt;</h4></section><section id=\"method.get_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#814-816\">source</a><a href=\"#method.get_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_svc/storage/trait.RawStorage.html#tymethod.get_raw\" class=\"fn\">get_raw</a>&lt;'a&gt;(\n    &amp;self,\n    name: &amp;str,\n    buf: &amp;'a mut [u8],\n) -&gt; Result&lt;Option&lt;&amp;'a [u8]&gt;, Self::<a class=\"associatedtype\" href=\"embedded_svc/storage/trait.StorageBase.html#associatedtype.Error\" title=\"type embedded_svc::storage::StorageBase::Error\">Error</a>&gt;</h4></section><section id=\"method.set_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#818-820\">source</a><a href=\"#method.set_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_svc/storage/trait.RawStorage.html#tymethod.set_raw\" class=\"fn\">set_raw</a>(&amp;mut self, name: &amp;str, buf: &amp;[u8]) -&gt; Result&lt;bool, Self::<a class=\"associatedtype\" href=\"embedded_svc/storage/trait.StorageBase.html#associatedtype.Error\" title=\"type embedded_svc::storage::StorageBase::Error\">Error</a>&gt;</h4></section></div></details>","RawStorage","esp_idf_svc::nvs::EspDefaultNvs","esp_idf_svc::nvs::EspCustomNvs","esp_idf_svc::nvs::EspEncryptedNvs"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StorageBase-for-EspNvs%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#797-807\">source</a><a href=\"#impl-StorageBase-for-EspNvs%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"esp_idf_svc/nvs/trait.NvsPartitionId.html\" title=\"trait esp_idf_svc::nvs::NvsPartitionId\">NvsPartitionId</a>&gt; <a class=\"trait\" href=\"embedded_svc/storage/trait.StorageBase.html\" title=\"trait embedded_svc::storage::StorageBase\">StorageBase</a> for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvs.html\" title=\"struct esp_idf_svc::nvs::EspNvs\">EspNvs</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"embedded_svc/storage/trait.StorageBase.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a></h4></section><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#800-802\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_svc/storage/trait.StorageBase.html#tymethod.contains\" class=\"fn\">contains</a>(&amp;self, name: &amp;str) -&gt; Result&lt;bool, Self::<a class=\"associatedtype\" href=\"embedded_svc/storage/trait.StorageBase.html#associatedtype.Error\" title=\"type embedded_svc::storage::StorageBase::Error\">Error</a>&gt;</h4></section><section id=\"method.remove\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#804-806\">source</a><a href=\"#method.remove\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_svc/storage/trait.StorageBase.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;mut self, name: &amp;str) -&gt; Result&lt;bool, Self::<a class=\"associatedtype\" href=\"embedded_svc/storage/trait.StorageBase.html#associatedtype.Error\" title=\"type embedded_svc::storage::StorageBase::Error\">Error</a>&gt;</h4></section></div></details>","StorageBase","esp_idf_svc::nvs::EspDefaultNvs","esp_idf_svc::nvs::EspCustomNvs","esp_idf_svc::nvs::EspEncryptedNvs"],["<section id=\"impl-Send-for-EspNvs%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_svc/nvs.rs.html#780\">source</a><a href=\"#impl-Send-for-EspNvs%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"esp_idf_svc/nvs/trait.NvsPartitionId.html\" title=\"trait esp_idf_svc::nvs::NvsPartitionId\">NvsPartitionId</a>&gt; Send for <a class=\"struct\" href=\"esp_idf_svc/nvs/struct.EspNvs.html\" title=\"struct esp_idf_svc::nvs::EspNvs\">EspNvs</a>&lt;T&gt;</h3></section>","Send","esp_idf_svc::nvs::EspDefaultNvs","esp_idf_svc::nvs::EspCustomNvs","esp_idf_svc::nvs::EspEncryptedNvs"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()