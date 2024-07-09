(function() {var type_impls = {
"esp_idf_svc":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1126-1128\">source</a><a href=\"#impl-Drop-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; Drop for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1130\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a>Read more</a></div></details></div></details>","Drop","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ErrorType-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1137-1139\">source</a><a href=\"#impl-ErrorType-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; <a class=\"trait\" href=\"embedded_hal/spi/trait.ErrorType.html\" title=\"trait embedded_hal::spi::ErrorType\">ErrorType</a> for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"embedded_hal/spi/trait.ErrorType.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiError.html\" title=\"struct esp_idf_svc::hal::spi::SpiError\">SpiError</a></h4></section></summary><div class='docblock'>Error type.</div></details></div></details>","ErrorType","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SpiDevice-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1144-1146\">source</a><a href=\"#impl-SpiDevice-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; <a class=\"trait\" href=\"embedded_hal/spi/trait.SpiDevice.html\" title=\"trait embedded_hal::spi::SpiDevice\">SpiDevice</a> for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1148\">source</a><a href=\"#method.read\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.read\" class=\"fn\">read</a>(\n    &amp;mut self,\n    buf: &amp;mut [u8],\n) -&gt; Result&lt;(), &lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt; as <a class=\"trait\" href=\"embedded_hal/spi/trait.ErrorType.html\" title=\"trait embedded_hal::spi::ErrorType\">ErrorType</a>&gt;::<a class=\"associatedtype\" href=\"embedded_hal/spi/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::spi::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Do a read within a transaction. <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.read\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1152\">source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.write\" class=\"fn\">write</a>(\n    &amp;mut self,\n    buf: &amp;[u8],\n) -&gt; Result&lt;(), &lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt; as <a class=\"trait\" href=\"embedded_hal/spi/trait.ErrorType.html\" title=\"trait embedded_hal::spi::ErrorType\">ErrorType</a>&gt;::<a class=\"associatedtype\" href=\"embedded_hal/spi/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::spi::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Do a write within a transaction. <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.write\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1156\">source</a><a href=\"#method.transaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/spi/trait.SpiDevice.html#tymethod.transaction\" class=\"fn\">transaction</a>(\n    &amp;mut self,\n    operations: &amp;mut [<a class=\"enum\" href=\"esp_idf_svc/hal/spi/enum.Operation.html\" title=\"enum esp_idf_svc::hal::spi::Operation\">Operation</a>&lt;'_, u8&gt;],\n) -&gt; Result&lt;(), &lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt; as <a class=\"trait\" href=\"embedded_hal/spi/trait.ErrorType.html\" title=\"trait embedded_hal::spi::ErrorType\">ErrorType</a>&gt;::<a class=\"associatedtype\" href=\"embedded_hal/spi/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::spi::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Perform a transaction against the device. <a href=\"embedded_hal/spi/trait.SpiDevice.html#tymethod.transaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transfer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/embedded_hal/spi.rs.html#391\">source</a><a href=\"#method.transfer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.transfer\" class=\"fn\">transfer</a>(\n    &amp;mut self,\n    read: &amp;mut [Word],\n    write: &amp;[Word],\n) -&gt; Result&lt;(), Self::<a class=\"associatedtype\" href=\"embedded_hal/spi/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::spi::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Do a transfer within a transaction. <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.transfer\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transfer_in_place\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/embedded_hal/spi.rs.html#401\">source</a><a href=\"#method.transfer_in_place\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.transfer_in_place\" class=\"fn\">transfer_in_place</a>(&amp;mut self, buf: &amp;mut [Word]) -&gt; Result&lt;(), Self::<a class=\"associatedtype\" href=\"embedded_hal/spi/trait.ErrorType.html#associatedtype.Error\" title=\"type embedded_hal::spi::ErrorType::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Do an in-place transfer within a transaction. <a href=\"embedded_hal/spi/trait.SpiDevice.html#method.transfer_in_place\">Read more</a></div></details></div></details>","SpiDevice","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SpiDeviceDriver%3C'd,+SpiDriver%3C'd%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#764\">source</a><a href=\"#impl-SpiDeviceDriver%3C'd,+SpiDriver%3C'd%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d&gt; <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new_single\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#782-790\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.new_single\" class=\"fn\">new_single</a>&lt;SPI&gt;(\n    spi: impl <a class=\"trait\" href=\"esp_idf_svc/hal/peripheral/trait.Peripheral.html\" title=\"trait esp_idf_svc::hal::peripheral::Peripheral\">Peripheral</a>&lt;P = SPI&gt; + 'd,\n    sclk: impl <a class=\"trait\" href=\"esp_idf_svc/hal/peripheral/trait.Peripheral.html\" title=\"trait esp_idf_svc::hal::peripheral::Peripheral\">Peripheral</a>&lt;P = impl <a class=\"trait\" href=\"esp_idf_svc/hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_svc::hal::gpio::OutputPin\">OutputPin</a>&gt; + 'd,\n    sdo: impl <a class=\"trait\" href=\"esp_idf_svc/hal/peripheral/trait.Peripheral.html\" title=\"trait esp_idf_svc::hal::peripheral::Peripheral\">Peripheral</a>&lt;P = impl <a class=\"trait\" href=\"esp_idf_svc/hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_svc::hal::gpio::OutputPin\">OutputPin</a>&gt; + 'd,\n    sdi: Option&lt;impl <a class=\"trait\" href=\"esp_idf_svc/hal/peripheral/trait.Peripheral.html\" title=\"trait esp_idf_svc::hal::peripheral::Peripheral\">Peripheral</a>&lt;P = impl <a class=\"trait\" href=\"esp_idf_svc/hal/gpio/trait.InputPin.html\" title=\"trait esp_idf_svc::hal::gpio::InputPin\">InputPin</a>&gt; + 'd&gt;,\n    cs: Option&lt;impl <a class=\"trait\" href=\"esp_idf_svc/hal/peripheral/trait.Peripheral.html\" title=\"trait esp_idf_svc::hal::peripheral::Peripheral\">Peripheral</a>&lt;P = impl <a class=\"trait\" href=\"esp_idf_svc/hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_svc::hal::gpio::OutputPin\">OutputPin</a>&gt; + 'd&gt;,\n    bus_config: &amp;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/config/struct.DriverConfig.html\" title=\"struct esp_idf_svc::hal::spi::config::DriverConfig\">DriverConfig</a>,\n    config: &amp;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/config/struct.Config.html\" title=\"struct esp_idf_svc::hal::spi::config::Config\">Config</a>,\n) -&gt; Result&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;<div class=\"where\">where\n    SPI: <a class=\"trait\" href=\"esp_idf_svc/hal/spi/trait.SpiAnyPins.html\" title=\"trait esp_idf_svc::hal::spi::SpiAnyPins\">SpiAnyPins</a>,</div></h4></section></div></details>",0,"esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#795-797\">source</a><a href=\"#impl-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#799-803\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.new\" class=\"fn\">new</a>(\n    driver: T,\n    cs: Option&lt;impl <a class=\"trait\" href=\"esp_idf_svc/hal/peripheral/trait.Peripheral.html\" title=\"trait esp_idf_svc::hal::peripheral::Peripheral\">Peripheral</a>&lt;P = impl <a class=\"trait\" href=\"esp_idf_svc/hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_svc::hal::gpio::OutputPin\">OutputPin</a>&gt; + 'd&gt;,\n    config: &amp;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/config/struct.Config.html\" title=\"struct esp_idf_svc::hal::spi::config::Config\">Config</a>,\n) -&gt; Result&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;, <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.device\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#842\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.device\" class=\"fn\">device</a>(&amp;self) -&gt; *mut <a class=\"struct\" href=\"esp_idf_svc/sys/struct.spi_device_t.html\" title=\"struct esp_idf_svc::sys::spi_device_t\">spi_device_t</a></h4></section><section id=\"method.transaction\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#846\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.transaction\" class=\"fn\">transaction</a>(\n    &amp;mut self,\n    operations: &amp;mut [<a class=\"enum\" href=\"esp_idf_svc/hal/spi/enum.Operation.html\" title=\"enum esp_idf_svc::hal::spi::Operation\">Operation</a>&lt;'_, u8&gt;],\n) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.read\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#865\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.read\" class=\"fn\">read</a>(&amp;mut self, read: &amp;mut [u8]) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.write\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#874\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.write\" class=\"fn\">write</a>(&amp;mut self, write: &amp;[u8]) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.transfer_in_place\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#883\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.transfer_in_place\" class=\"fn\">transfer_in_place</a>(&amp;mut self, buf: &amp;mut [u8]) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section><section id=\"method.transfer\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#892\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html#tymethod.transfer\" class=\"fn\">transfer</a>(\n    &amp;mut self,\n    read: &amp;mut [u8],\n    write: &amp;[u8],\n) -&gt; Result&lt;(), <a class=\"struct\" href=\"esp_idf_svc/sys/struct.EspError.html\" title=\"struct esp_idf_svc::sys::EspError\">EspError</a>&gt;</h4></section></div></details>",0,"esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transactional%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1241-1243\">source</a><a href=\"#impl-Transactional%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.Transactional.html\" title=\"trait embedded_hal::blocking::spi::Transactional\">Transactional</a>&lt;u8&gt; for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"embedded_hal/blocking/spi/trait.Transactional.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiError.html\" title=\"struct esp_idf_svc::hal::spi::SpiError\">SpiError</a></h4></section></summary><div class='docblock'>Associated error type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.exec\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1247-1250\">source</a><a href=\"#method.exec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/blocking/spi/trait.Transactional.html#tymethod.exec\" class=\"fn\">exec</a>(\n    &amp;mut self,\n    operations: &amp;mut [<a class=\"enum\" href=\"embedded_hal/blocking/spi/enum.Operation.html\" title=\"enum embedded_hal::blocking::spi::Operation\">Operation</a>&lt;'_, u8&gt;],\n) -&gt; Result&lt;(), &lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt; as <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.Transactional.html\" title=\"trait embedded_hal::blocking::spi::Transactional\">Transactional</a>&lt;u8&gt;&gt;::<a class=\"associatedtype\" href=\"embedded_hal/blocking/spi/trait.Transactional.html#associatedtype.Error\" title=\"type embedded_hal::blocking::spi::Transactional::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Execute the provided transactions</div></details></div></details>","Transactional<u8>","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transfer%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1161-1163\">source</a><a href=\"#impl-Transfer%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.Transfer.html\" title=\"trait embedded_hal::blocking::spi::Transfer\">Transfer</a>&lt;u8&gt; for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"embedded_hal/blocking/spi/trait.Transfer.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiError.html\" title=\"struct esp_idf_svc::hal::spi::SpiError\">SpiError</a></h4></section></summary><div class='docblock'>Error type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transfer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1167\">source</a><a href=\"#method.transfer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/blocking/spi/trait.Transfer.html#tymethod.transfer\" class=\"fn\">transfer</a>&lt;'w&gt;(\n    &amp;mut self,\n    words: &amp;'w mut [u8],\n) -&gt; Result&lt;&amp;'w [u8], &lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt; as <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.Transfer.html\" title=\"trait embedded_hal::blocking::spi::Transfer\">Transfer</a>&lt;u8&gt;&gt;::<a class=\"associatedtype\" href=\"embedded_hal/blocking/spi/trait.Transfer.html#associatedtype.Error\" title=\"type embedded_hal::blocking::spi::Transfer::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Sends <code>words</code> to the slave. Returns the <code>words</code> received from the slave</div></details></div></details>","Transfer<u8>","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Write%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1174-1176\">source</a><a href=\"#impl-Write%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.Write.html\" title=\"trait embedded_hal::blocking::spi::Write\">Write</a>&lt;u8&gt; for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"embedded_hal/blocking/spi/trait.Write.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiError.html\" title=\"struct esp_idf_svc::hal::spi::SpiError\">SpiError</a></h4></section></summary><div class='docblock'>Error type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1180\">source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/blocking/spi/trait.Write.html#tymethod.write\" class=\"fn\">write</a>(\n    &amp;mut self,\n    words: &amp;[u8],\n) -&gt; Result&lt;(), &lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt; as <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.Write.html\" title=\"trait embedded_hal::blocking::spi::Write\">Write</a>&lt;u8&gt;&gt;::<a class=\"associatedtype\" href=\"embedded_hal/blocking/spi/trait.Write.html#associatedtype.Error\" title=\"type embedded_hal::blocking::spi::Write::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Sends <code>words</code> to the slave, ignoring all the incoming words</div></details></div></details>","Write<u8>","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WriteIter%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1186-1188\">source</a><a href=\"#impl-WriteIter%3Cu8%3E-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.WriteIter.html\" title=\"trait embedded_hal::blocking::spi::WriteIter\">WriteIter</a>&lt;u8&gt; for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section></summary><div class=\"docblock\"><p>All data is chunked into max(iter.len(), 64)</p>\n</div><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"embedded_hal/blocking/spi/trait.WriteIter.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiError.html\" title=\"struct esp_idf_svc::hal::spi::SpiError\">SpiError</a></h4></section></summary><div class='docblock'>Error type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1192-1194\">source</a><a href=\"#method.write_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"embedded_hal/blocking/spi/trait.WriteIter.html#tymethod.write_iter\" class=\"fn\">write_iter</a>&lt;WI&gt;(\n    &amp;mut self,\n    words: WI,\n) -&gt; Result&lt;(), &lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt; as <a class=\"trait\" href=\"embedded_hal/blocking/spi/trait.WriteIter.html\" title=\"trait embedded_hal::blocking::spi::WriteIter\">WriteIter</a>&lt;u8&gt;&gt;::<a class=\"associatedtype\" href=\"embedded_hal/blocking/spi/trait.WriteIter.html#associatedtype.Error\" title=\"type embedded_hal::blocking::spi::WriteIter::Error\">Error</a>&gt;<div class=\"where\">where\n    WI: IntoIterator&lt;Item = u8&gt;,</div></h4></section></summary><div class='docblock'>Sends <code>words</code> to the slave, ignoring all the incoming words</div></details></div></details>","WriteIter<u8>","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"],["<section id=\"impl-Send-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#1135\">source</a><a href=\"#impl-Send-for-SpiDeviceDriver%3C'd,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'d, T&gt; Send for <a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDeviceDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDeviceDriver\">SpiDeviceDriver</a>&lt;'d, T&gt;<div class=\"where\">where\n    T: Send + Borrow&lt;<a class=\"struct\" href=\"esp_idf_svc/hal/spi/struct.SpiDriver.html\" title=\"struct esp_idf_svc::hal::spi::SpiDriver\">SpiDriver</a>&lt;'d&gt;&gt; + 'd,</div></h3></section>","Send","esp_idf_svc::hal::spi::SpiSingleDeviceDriver"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()