### Priority:::
1. Internal, External?
2. Inline 1000 -
3. #id - 100
4. .class 10 -
5. tag - 1
6. Equal specificity? (2 thằng cùng tên nhưng so về điểm) 0 point
7. Universal selector and inherited? (thuộc tính thừa hưởng) 0 point
8. !important : > inline (>1000 điểm)


----------------------------
### rel:::
 thuộc tính rel được sử dụng để liên kết một tệp CSS có tên "main.css" với tài liệu HTML hiện tại. Thuộc tính "rel" có giá trị là "stylesheet" để chỉ định rằng tệp liên kết là một tệp CSS được sử dụng để định dạng và trình bày cho tài liệu HTML.

Một số giá trị phổ biến của thuộc tính "rel" trong thẻ "link" là:

"stylesheet": Được sử dụng để liên kết một tệp CSS với tài liệu HTML.
"icon": Được sử dụng để liên kết một biểu tượng hoặc favicon với tài liệu HTML.
"preconnect": Được sử dụng để chỉ định việc thiết lập kết nối trước tới một tài nguyên.
"nofollow": Được sử dụng để chỉ định rằng công cụ tìm kiếm không nên theo liên kết.

----------------------------
### meta:::
Thẻ <meta> trong HTML được sử dụng để định nghĩa các thông tin meta (thông tin mô tả) về tài liệu HTML. Các thông tin meta này không hiển thị trực tiếp trên trình duyệt, mà được sử dụng để cung cấp các thông tin phụ cho trình duyệt, công cụ tìm kiếm và các ứng dụng khác.

Có một số thuộc tính quan trọng được sử dụng trong thẻ <meta>:

Thuộc tính "charset":

Được sử dụng để xác định bộ ký tự (encoding) được sử dụng cho tài liệu HTML.
Ví dụ: <meta charset="UTF-8"> xác định rằng tài liệu sử dụng bộ ký tự UTF-8.
Thuộc tính "name" và "content":

Sử dụng cùng nhau để định nghĩa các thông tin meta cụ thể.
Thuộc tính "name" chỉ định tên thông tin meta.
Thuộc tính "content" chứa giá trị của thông tin meta.
Ví dụ: <meta name="description" content="Mô tả tài liệu"> định nghĩa mô tả cho tài liệu HTML.
Thuộc tính "http-equiv":

Sử dụng để chỉ định các hành vi tương tự HTTP (HTTP-equivalent) cho trình duyệt.
Ví dụ: <meta http-equiv="refresh" content="5; URL=https://example.com"> sẽ làm cho trình duyệt tự động tải lại tài liệu sau 5 giây và chuyển hướng đến địa chỉ URL đã chỉ định.
Thuộc tính "viewport":

Được sử dụng trong thiết kế web đáp ứng (responsive design) để điều chỉnh hiển thị trên các thiết bị di động.
Ví dụ: <meta name="viewport" content="width=device-width, initial-scale=1.0"> sẽ điều chỉnh kích thước hiển thị ban đầu và tỷ lệ trên các thiết bị di động.
Thẻ <meta> cung cấp các thông tin meta quan trọng cho trình duyệt và các công cụ tìm kiếm, giúp cải thiện trải nghiệm người dùng, tối ưu hóa SEO và cung cấp thông tin hữu ích về tài liệu HTML.

----------------------------
### CSS Units::::
Có nhiều đơn vị đo lường CSS mà bạn có thể sử dụng để xác định kích thước, khoảng cách và các thuộc tính khác của phần tử trang web. Dưới đây là một số đơn vị đo lường phổ biến:

Đơn vị đo lường độ dài:
***px (pixel)***: Đây là đơn vị đo lường độ dài cố định, thường được sử dụng để xác định kích thước cụ thể.
***em***: Đơn vị đo lường tương đối dựa trên kích thước của phông chữ cha.
***rem***: Giống như em, nhưng dựa trên kích thước của phông chữ của phần tử gốc (root).
***%***: Đo lường theo phần trăm của một đặc điểm nào đó (thường chiều rộng của phần tử cha).

Đơn vị đo lường trong CSS3:
***vw (viewport width)***: Đo lường theo phần trăm của chiều rộng của cửa sổ trình duyệt.
***vh (viewport height)***: Đo lường theo phần trăm của chiều cao của cửa sổ trình duyệt.
***vmin***: Đo lường theo phần trăm của chiều rộng hoặc chiều cao nhỏ hơn của cửa sổ trình duyệt.
***vmax***: Đo lường theo phần trăm của chiều rộng hoặc chiều cao lớn hơn của cửa sổ trình duyệt.

Đơn vị đo lường góc:
***deg (degrees)***: Đo góc theo độ.
***rad (radians)***: Đo góc theo radians.
***grad (gradians)***: Đo góc theo gradians.

Đơn vị đo lường thời gian:
***s (seconds)***: Đo thời gian bằng giây.
***ms (milliseconds)***: Đo thời gian bằng mili giây.

Đơn vị đo lường màu sắc:
***hex (#RRGGBB)***: Được sử dụng để định rõ màu sắc bằng mã hex.
***rgb (red, green, blue)***: Được sử dụng để định rõ màu sắc bằng giá trị RGB.
***rgba (red, green, blue, alpha)***: Giống như rgb, nhưng bổ sung một giá trị alpha để định độ trong suốt.

----------------------------
### Padding vs Margin::::
Padding và margin là hai khái niệm quan trọng trong CSS, được sử dụng để quy định khoảng cách và khoảng trống xung quanh phần tử HTML (ví dụ: hình ảnh, văn bản hoặc div).

***Padding***:
Padding là khoảng trống bên trong phần tử, giữa nội dung và biên ngoài của phần tử. Nó tạo ra khoảng cách giữa nội dung của phần tử và biên ngoài của nó.
Padding có thể được thiết lập bằng sử dụng các thuộc tính như padding-top, padding-right, padding-bottom, và padding-left, hoặc bằng cách sử dụng thuộc tính ngắn gọn như padding (theo thứ tự: top, right, bottom, left).
Ví dụ:
css
Copy code
div {
    padding: 10px; /* 10px padding cho tất cả bốn phía của phần tử */
}
***Margin:***
Margin là khoảng cách xung quanh phần tử, giữa phần tử và các phần tử xung quanh nó. Nó xác định khoảng cách giữa phần tử và phần tử khác ở xung quanh nó.
Margin cũng có thể được thiết lập bằng cách sử dụng các thuộc tính tương tự như margin-top, margin-right, margin-bottom, và margin-left, hoặc bằng cách sử dụng thuộc tính ngắn gọn như margin (theo thứ tự: top, right, bottom, left).
Ví dụ:

css
Copy code
div {
    margin: 20px; /* 20px margin cho tất cả bốn phía của phần tử */
}
Sự khác biệt chính:

Padding thêm khoảng trống bên trong phần tử.
Margin thêm khoảng cách xung quanh phần tử.
Khi bạn đặt padding cho một phần tử, nó ảnh hưởng đến khoảng cách giữa nội dung và biên ngoài của phần tử. Trong khi đó, margin là khoảng cách giữa phần tử và các phần tử xung quanh nó. Cả hai có thể được sử dụng để tạo khoảng cách và tạo cấu trúc cho trang web của bạn.

--------------------------------
### box-sizing:::
 là một thuộc tính CSS quan trọng được sử dụng để quy định cách mà các kích thước (width và height) của một phần tử HTML được tính toán. Thuộc tính này có hai giá trị chính: content-box và border-box.

***content-box (giá trị mặc định)***:
Khi bạn sử dụng giá trị content-box, kích thước của một phần tử sẽ được tính dựa trên nội dung bên trong nó và sẽ không bao gồm padding và border.
Điều này có nghĩa rằng nếu bạn đặt một kích thước cố định cho một phần tử, và sau đó thêm padding hoặc border, phần tử sẽ trở nên lớn hơn kích thước ban đầu và có thể làm hỏng cấu trúc trang web của bạn.
border-box:

***border-box*** :
 kích thước của một phần tử sẽ bao gồm cả nội dung, padding và border. Điều này đảm bảo rằng phần tử sẽ luôn giữ nguyên kích thước cố định mà bạn đã đặt, bất kể padding và border.
Việc sử dụng box-sizing: border-box thường được ưa chuộng trong thiết kế web, vì nó giúp quản lý kích thước của phần tử dễ dàng hơn và tránh những thay đổi không mong muốn khi bạn thêm padding hoặc border. Điều này giúp làm giảm khả năng xảy ra lỗi trong cấu trúc của trang web và giúp tạo ra giao diện đáng tin cậy hơn.

Ví dụ sử dụng box-sizing:

css
Copy code
.box {
    width: 200px;
    padding: 20px;
    border: 2px solid #333;
    box-sizing: border-box;
}
Trong ví dụ trên, kích thước tổng cộng của .box sẽ là 200px x 200px (bao gồm cả nội dung, padding và border) do chúng ta đã sử dụng box-sizing: border-box.

-------------------------------
### Pseudo-classes (lớp ảo) :::
là một phần quan trọng của CSS, chúng cho phép bạn chọn các phần tử HTML dựa trên trạng thái hoặc vị trí của phần tử đó mà không cần thay đổi cấu trúc HTML. Pseudo-classes được ký hiệu bằng dấu hai chấm (:) sau tên của phần tử hoặc của một class, ID, hoặc tag cụ thể. Một số pseudo-classes phổ biến bao gồm:

***:hover*** :Sử dụng để chọn phần tử khi con trỏ chuột di chuyển qua phần tử đó. Ví dụ: a:hover sẽ chọn một liên kết khi chuột di chuyển qua nó.

***:active*** :Sử dụng để chọn phần tử khi phần tử đó được kích hoạt, thường là khi người dùng click vào nó. Ví dụ: button:active sẽ chọn một nút khi được click.

***:focus*** :Sử dụng để chọn phần tử khi phần tử đó đang trong trạng thái focus, thường là khi người dùng sử dụng bàn phím hoặc tab để điều hướng. Ví dụ: input:focus sẽ chọn một trường input khi nó đang được focus.

***:nth-child()*** :Cho phép bạn chọn phần tử con dựa trên vị trí của nó trong phần tử cha. Ví dụ: li:nth-child(odd) sẽ chọn tất cả các phần tử li ở vị trí lẻ trong một danh sách.

***:not()*** :Cho phép bạn chọn tất cả các phần tử trừ đi phần tử được chỉ định. Ví dụ: p:not(.special) sẽ chọn tất cả các đoạn văn (p) ngoại trừ các đoạn văn có class "special".

***:first-child*** và ***:last-child*** : Chọn phần tử đầu tiên và cuối cùng trong danh sách các phần tử con của phần tử cha.

***:nth-of-type()*** :Giống như :nth-child(), nhưng chỉ chọn các phần tử cùng loại.

Pseudo-classes rất hữu ích trong việc tạo các hiệu ứng tương tác, căn chỉnh phần tử, và chọn các phần tử dựa trên các tiêu chí khác nhau trong trang web của bạn. Chúng giúp bạn kiểm soát giao diện và gắn kết các phần tử với các tình huống cụ thể mà không cần sửa đổi cấu trúc HTML.

-------------------------------
### Pseudo-elements (phần tử ảo) :::
là một phần của CSS được sử dụng để tạo và điều khiển các phần tử giả tạo mà không cần thay đổi cấu trúc HTML. Pseudo-elements được ký hiệu bằng dấu hai chấm kép (::) sau tên phần tử hoặc của một class, ID, hoặc tag cụ thể. Một số pseudo-elements phổ biến bao gồm:

***::before*** :Tạo một phần tử giả tạo trước phần tử được chọn, cho phép bạn thêm nội dung hoặc trang trí vào phần tử.

***::after:*** :Tạo một phần tử giả tạo sau phần tử được chọn, cũng cho phép bạn thêm nội dung hoặc trang trí.

***::first-line*** :Chọn dòng đầu tiên trong phần tử văn bản. Thường được sử dụng để kiểm soát định dạng của dòng đầu tiên, ví dụ: làm cho dòng đầu in hoa.

***::first-letter*** :Chọn chữ cái đầu tiên của phần tử văn bản. Thường được sử dụng để tạo kiểu cho chữ cái đầu tiên, ví dụ: làm cho chữ cái đầu lớn hơn và thường có một kiểu chữ cái đặc biệt.

***::selection*** :Chọn vùng văn bản mà người dùng đã chọn. Điều này cho phép bạn kiểm soát kiểu dáng của vùng văn bản đã chọn, ví dụ: thay đổi màu nền hoặc màu chữ của vùng đã chọn.

-------------------------------
### position :::

Thuộc tính position trong CSS được sử dụng để kiểm soát vị trí của một phần tử trên trang web. Có một số giá trị cho thuộc tính position, bao gồm static, relative, absolute, fixed, và sticky. Dưới đây là mô tả chi tiết về mỗi giá trị:

***static (Giá trị mặc định)***:
Phần tử sử dụng vị trí mặc định trong luồng dự định của nó. Thuộc tính top, right, bottom, và left không có tác dụng.

***relative:***
Phần tử sử dụng vị trí mặc định, nhưng có thể được dịch chuyển bằng cách sử dụng thuộc tính top, right, bottom, và left so với vị trí mặc định của nó. Dịch chuyển không ảnh hưởng đến vị trí của các phần tử khác.

***absolute:***
Phần tử sẽ được đặt tại một vị trí tuyệt đối so với phần tử cha gần nhất có thuộc tính position khác static. Nó có thể được điều khiển bằng cách sử dụng top, right, bottom, và left.

***fixed:***
Tương tự như absolute, nhưng phần tử sẽ luôn ở tại một vị trí tuyệt đối so với cửa sổ trình duyệt, không bao gồm cả trường hợp trượt trang. Điều này thường được sử dụng để tạo các phần tử gắn kết hoặc thanh định vị.

***sticky:***
Phần tử sẽ thường xuất hiện tại vị trí mặc định của nó, nhưng khi người dùng cuộn trang qua phần tử, nó sẽ "dính" và ở lại tại vị trí được chỉ định bởi top, right, bottom, và left. Sau khi người dùng cuộn qua phần tử, nó sẽ tiếp tục xuất hiện tại vị trí đã được thiết lập.

--------------------------------------
### flex box::: 
có thuộc tính CSS sau:

***display***: Để biến một phần tử HTML thành một Flex Container, bạn sử dụng display: flex; hoặc display: inline-flex;. Giá trị flex tạo một container linh hoạt, trong khi inline-flex làm cho container linh hoạt trở thành một phần của luồng văn bản.

***flex-direction***: Thuộc tính này xác định hướng sắp xếp của các phần tử con bên trong Flex Container. Các giá trị thường sử dụng là row, row-reverse, column, và column-reverse.

***justify-content***: Được sử dụng để căn chỉnh các phần tử con theo hướng hàng (horizontal). Các giá trị thông dụng bao gồm flex-start, flex-end, center, space-between, và space-around.

***align-items***: Được sử dụng để căn chỉnh các phần tử con theo hướng cột (vertical). Các giá trị thông dụng bao gồm flex-start, flex-end, center, stretch, và baseline.

***align-self***: Được sử dụng để kiểm soát căn chỉnh của từng phần tử con độc lập trong Flex Container. Nó ghi đè lên align-items.

***flex-grow***: Xác định khả năng mở rộng của phần tử con trong Flex Container khi không đủ không gian. Giá trị càng lớn, phần tử con càng mở rộng nhiều hơn.

***flex-shrink***: Xác định khả năng thu nhỏ của phần tử con khi có quá nhiều không gian. Giá trị càng lớn, phần tử con càng thu nhỏ ít hơn.

***flex-basis***: Xác định kích thước ban đầu của phần tử con trước khi tính đến flex-grow và flex-shrink.

***flex***: Là một viết gọn của flex-grow, flex-shrink, và flex-basis. Ví dụ: flex: 1 0 auto; sẽ cho phép phần tử con mở rộng, không thu nhỏ, và dựa vào kích thước ban đầu.

***order***: Xác định thứ tự hiển thị của phần tử con trong Flex Container. Một giá trị nhỏ sẽ đặt phần tử trước và một giá trị lớn đặt phần tử sau.

***flex-wrap*** :để kiểm soát cách các phần tử con trong một Flex Container được xếp lại (wrapping) khi không còn đủ không gian trong hàng hoặc cột hiện tại. Các giá trị thông dụng: nowrap (Giá trị mặc định), wrap, wrap-reverse

trang ôn kiến thức flex box: 
[flex-box](http://https://codepen.io/enxaneta/full/adLPwv/)

--------------------------------------
### CSS BEM::: 
BEM là viết tắt của "Block Element Modifier." Đây là một phương pháp đặt tên và tổ chức lớp (class) CSS trong việc phát triển giao diện web. BEM giúp quản lý và duy trì mã CSS dễ dàng hơn, đặc biệt là trong các dự án lớn và phức tạp. Phương pháp này tách biệt và gắn kết các phần tử của trang web thành ba phần chính:

Block (B): Block là phần tử cơ bản và độc lập nhất trong giao diện, không phụ thuộc vào bất kỳ phần tử nào khác. Block có thể là một phần tử lớn như thanh điều hướng, tiêu đề, hoặc một phần tử nhỏ hơn như nút, biểu mẫu. Block thường được đặt tên với tiền tố để chỉ rõ mục đích của nó, ví dụ: .header, .button, .menu.

Element (E): Element là các phần tử con của Block và không tồn tại độc lập. Các Element thuộc Block và được đặt tên dưới dạng block__element. Ví dụ: .menu__item, .button__text, trong đó menu và button là các Block.

Modifier (M): Modifier được sử dụng để thay đổi giao diện của Block hoặc Element trong trạng thái cụ thể. Modifier giúp bạn tạo các biến thể của Block hoặc Element mà không cần viết lại CSS cơ bản. Modifier được đặt tên dưới dạng block__element--modifier. Ví dụ: .button--primary, .menu__item--active.

--------------------------------------
### trang icon PNG: 
[flex-box]([http://https://codepen.io/enxaneta/full/adLPwv/](https://www.pngwing.com/en/free-png-nqkdr/download))


---------------------------------------
### thuộc tính display: 
Thuộc tính display trong CSS quyết định cách một phần tử HTML được hiển thị trên trang web. Dưới đây, chúng ta sẽ giải thích các giá trị phổ biến của display cùng với ví dụ và mô tả chi tiết.

***display: block;***
Mô tả: Phần tử sẽ hiển thị như một hộp chứa và nắm toàn bộ chiều rộng của phần tử chứa nó.
Ví dụ: div, p, h1, ul, li,...

***display: inline;***
Mô tả: Phần tử sẽ hiển thị trên cùng một dòng và chiếm chỉ chiều rộng cần thiết.
Ví dụ: span, a, strong, em,...

***display: inline-block;***
Mô tả: Tương tự inline, nhưng phần tử có thể được định dạng về chiều rộng và chiều cao.
Ví dụ: Nếu bạn muốn tạo một nút có chiều rộng và chiều cao được điều chỉnh.

***display: none;***
Mô tả: Phần tử bị ẩn và không chiếm không gian trên trang.
Ví dụ: Dùng để ẩn một phần tử khi không cần hiển thị nó.

***display: flex;***
Mô tả: Tạo ra một mô hình dàn trang dựa trên một hộp chứa chuyển đổi và tự động xếp các phần tử con.
Ví dụ: Dùng để tạo giao diện linh hoạt với căn chỉnh dễ dàng.

***display: grid;***
Mô tả: Tạo ra một mô hình lưới, cho phép bạn xác định các hàng và cột để sắp xếp phần tử con.
Ví dụ: Sử dụng cho thiết kế trang web đa cột hoặc giao diện lưới.

***display: table;***
Mô tả: Phần tử sẽ được hiển thị như một bảng HTML, với các phần tử table-row và table-cell.
Ví dụ: Rất ít khi sử dụng, thường cho việc tạo các giao diện có sự tương tác giống bảng.

***display: table-row;***
Mô tả: Phần tử sẽ được hiển thị như một hàng trong bảng.
Ví dụ: Được sử dụng kết hợp với display: table để tạo bảng.

***display: table-cell;***
Mô tả: Phần tử sẽ được hiển thị như một ô trong bảng.
Ví dụ: Được sử dụng kết hợp với display: table-row và display: table để tạo bảng.

***display: inline-table;***
Mô tả: Phần tử sẽ hiển thị như một bảng nhỏ được nhúng vào dòng văn bản.
Ví dụ: Sử dụng khi bạn muốn hiển thị một bảng nhỏ bên cạnh văn bản.

***display: list-item;***
Mô tả: Phần tử sẽ hiển thị như một mục trong danh sách và có một dấu chấm tròn hoặc số đánh dấu.
Ví dụ: Thường được sử dụng cho danh sách bấm.

***display: initial;***
Mô tả: Phần tử sẽ hiển thị theo giá trị mặc định của nó, được định nghĩa bởi loại phần tử (ví dụ: block cho div, inline cho a).
