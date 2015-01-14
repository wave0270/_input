/**
 * Created by haihn on 7/11/14.
 *
 * Thư viện chứa các hàm xử lý tách dữ liệu.
 */
var Extractor = {
    /**
     *
     * Reference: http://api.jquery.com/find/
     * Chú ý: lý do sử dụng jQuery.find là vì có 1 số css path cần dùng nth-of-type mà tính năng này api của dom chưa hỗ trợ.
     * @param el
     * @param extPlan
     * @returns {Array}
     */
    extractDataFromDomElement: function (el, extPlan) {
        var result = [];
        if (extPlan.cssParent != '') {
            var nodes = $(el).find(extPlan.cssParent);
            for(var i = 0; i < nodes.length ; i++) {
                var childCssPath = extPlan.cssPath.split(' > ');
                childCssPath = childCssPath.slice(extPlan.cssParent.split(' > ').length,childCssPath.length); 
                if( $(nodes[i]).find(childCssPath.join(' > ')).length > 0){
                    childCssPath = childCssPath.join(' > ');
                    var nodeData = this.processElement($(nodes[i]).find(childCssPath)[0], extPlan.attrType);

                    nodeData = this.excludePath(nodeData, extPlan.cssDelete);
                }else{
                    var nodeData = '';
                }
                result.push(nodeData);
            }
        } else {
            var nodes = $(el).find(extPlan.cssPath); 
            for (var i = 0; i < nodes.length; i++) {
                var nodeData = this.processElement(nodes[i], extPlan.attrType);
                nodeData = this.excludePath(nodeData, extPlan.cssDelete);
                result.push(nodeData);
            }
        }
        //console.log(result);
        return result;
    },

    /**
     * Tách dữ liệu từ Html string.
     * @param htmlStr
     * @param extPlan
     * @returns {Array}
     */
    extractDataFromHtmlString: function(htmlStr, extPlan){
        var el = document.createElement('div');
        el.innerHTML = htmlStr;
        return this.extractDataFromDomElement(el, extPlan);
    },

    /**
     * Tách dữ liệu từ url.
     * @param url
     * @param extPlan
     * @returns {Array}
     */
    extractDataFromUrl: function(url, extPlan){
        console.log('extractDataFromUrl: ', url);
        var htmlStr = getRemoteUrl(url);
        htmlStr = this.disableSrcHref(htmlStr); // Loại bỏ các thuộc tính src & href để tránh phải download các resource
        
        return this.extractDataFromHtmlString(htmlStr, extPlan);
    },

    /**
     * Disable các thuộc tính src, href bằng cách: đổi tên các thuộc tính src bằng data-src; href bằng data-href.
     * Mục đích: để tạo ra html string mà khi dựng thành dom document sẽ không tự load các resource nữa.
     * @param htmlStr
     * @returns {XML|string}
     */
    disableSrcHref: function(htmlStr) {
        return htmlStr.replace(/src/g, 'data-src').replace(/href/g, 'data-href');
    },
    /**
     * Xử lý DOM node để lấy ra thuộc tính cần thiết.
     * @param el: node cần xử lý
     * @param attrType: chuỗi cho biết loại dữ liệu cần lấy. Các giá trị có thể có:
     * @returns {string}
     */
    processElement : function(el, attrType){
        if (el == null) return '';
        if(attrType == 'outerHTML') return el.outerHTML.replace(/data-src/g, "src");
        if(attrType == 'innerHTML') return el.outerHTML.replace(/data-src/g, "src");
        if(attrType == 'text' && el.innerText.trim() != '') return data = el.innerText.trim();
        if(attrType == 'href'){
            return this.processHrefAndSrc(el, "data-href");
        }
        if(attrType == 'src') { 
            if(this.processHrefAndSrc(el, "data-src") != '') return this.processHrefAndSrc(el, "data-src");
            else return this.processHrefAndSrc(el, "data-original");
        } 
        return '';
    },

    /** 
     * Xử lý tìm thuộc tính trong các node cấp dưới và cấp trên.
     *
     * execute element to get data: regEXP, auto alt, href, src
     * @param node 
     * @param attbName: Tên thuộc tính cần lấy giá trị.
     */
    processHrefAndSrc : function(node, attbName){
        var data = node.getAttribute(attbName);
        if (data != null) return data;  // Lấy được giá trị thuộc tính cần tìm trong node hiện tại nên trả kết quả về luôn.
        
        // Node hiện tại không có thuộc tính cần tìm nên tiếp tục tìm kiếm trong các node con. Tìm xuống max là 3 cấp.
        var childList = $(node).children();
        for (var i = 0; i < childList.length; i++) {
            data = childList[i].getAttribute(attbName);
            if (data != null) return data;
            var childList2 = $(childList[i]).children();
            for (var j = 0; j < childList2.length; j++) {
                data = childList2[j].getAttribute(attbName);
                if (data != null) return data;
                var childList3 = $(childList2[j]).children();
                for (var f = 0; f < childList3.length; f++) {
                    data = childList3[f].getAttribute(attbName);
                    if (data != null) return data;
                }
            }
        }

        // Nếu tìm trong các node con mà không có thì sẽ đi ngược lại để tìm giá trị phù hợp trong các node cha.
        var parent = $(node).parent()[0];

        while((data == '' || data == null) && parent != undefined){
            data = parent.getAttribute(attbName);
            if( data != null) return data;

            parent = $(parent).parent()[0];
        }
        // Không tìm thấy kết quả nào cả, trả kết quả rỗng về
        return '';
    },

    /**
     * Xử lý 'loại bỏ' các cssPath trong childPath dựa vào deletePath. 'Loại bỏ' ở đây được hiểu là thêm thuộc tính 'display:none' vào element.
     * @param {String} 
     * @param {Array} deletePath Danh sách các properties cần loại bỏ
     * @return 
     */
    excludePath: function(el, deletePath) {
        var tmp = document.createElement('div'); 
        tmp.innerHTML = el;
        for(var i in deletePath){
            $(tmp).find(deletePath[i]).css("display","none");
        }
        return $(tmp)[0].innerHTML;
    }
    
};