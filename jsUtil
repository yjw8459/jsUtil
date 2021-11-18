let dataUtil = {
	masterData : null,
	detailData : null,
	get getMasterData() { return dataUtil.masterData[$('#masterGrid tbody .table-info').index()]; },
	get getDetailData() { return dataUtil.detailData[$('#detailGrid tbody .table-info').index()]; }
};

const MASTER_TR = '#masterGrid tbody tr';

/**
 * 객체 병합
 * @returns
 */
function fn_mergeObject(result, data){
	for ( let property in data) {
		result[property] = data[property];
	}
	return result;
}

function fn_ajaxPOST_stringify(url, data, callback, _async){
	if ( _async === undefined ) _async = true;
	$.ajax({
	    type: "POST"
	   ,url: url
	   ,data: JSON.stringify(data)
	   ,async : _async
	   ,contentType : 'application/json'
	   ,beforeSend:function(){ $('.preloader').show(); }
	   ,complete:function(){ $('.preloader').fadeOut(); }
	   ,success: callback
	   ,dataType:"json"
	   ,error : function(x, e) { fn_ajaxError(x, e); }
	});
}


function fn_initializeYearMonthDay(className, separator){
	$('.' + className).mask('0000' + separator + '00' + separator + '00');
}

function fn_initializeTime(className, separator){
	$('.' + className).mask('00' + separator + '00');
}



/** 태그 위에 Form으로 감싸서 serializeObject
 * 작성자 : 유종원
 * @param $parent
 * @returns
 */
function fn_wrappingFormData($parent){
	let $form = $('<form></form>');
	$form.append($parent);
	let data = $form.serializeObject();
	return data;
}

/**
 * 30분 1시간 단위인지 구분
 * 작성자 : 유종원
 * @param value
 * @param separator
 * @returns
 */
function fn_checkMinute(value, separator){
	if ( typeof value == 'undefined' )	return true; 
	let hour = value.split(separator)[0];
	let minute = value.split(separator)[1];
	if ( minute === '30' || minute === '00' ) {
		return false;
	}
	return true;
}


/**
 * 체크박스 리스트를 받아서 체크된 값의 리스트 반환
 * @returns
 */
function fn_isChecked_returnArray($checkList){
	let values = new Array();
	$checkList.each(function(){
		let isChecked = $(this).prop('checked');
		if ( isChecked ) 	values.push( $(this).val() );
	});
	return values;
}


function fn_commonOpenModal(id){
	$('#' + id).modal('show');
}

function fn_commonCloseModal(id){
	$('#' + id).modal('hide');
}

function fn_commonTableClickEvent(tableName, callback){
	if ( callback === undefined  ) 	callback = null;
	return function(){
		$('#' + tableName + ' tbody tr').attr('class', '');
		$(this).attr('class', 'table-info');
		if ( callback === null ) 	return false;
		callback();
	}
}

function fn_getCallback(division, callback){
	let msg = '';
	if ( division === 'delete' ) 		msg = '삭제되었습니다.';
	else if ( division === 'insert' ) 	msg = '저장되었습니다.';
	else if ( division === 'confirm' ) 	msg = '신청되었습니다.';
	return function(data){
		let retCode = data.retCode;
		if ( retCode > 0 ) {
			alert(msg);
			if ( callback === undefined )	location.reload();
			else							callback();
		}
	};
}

function fn_commonInsertRow(selector, repeat){
	let rowCnt = $(selector).length;
	let selectedCnt  = $(selector + ' .table-info').length;
	let idx = selectedCnt < 1 ? rowCnt : rowCnt + selectedCnt; 
	let html = '';
	html += '<tr class="insertRow">';
	html += '	<td>' + (idx++) + '</td>';
	for (var i = 0; i < repeat; i++) {
		html += '	<td></td>';
	}
	html += '	<input class="status" value="I">';
	html += '</tr>';
	selectedCnt < 1 ? $(selector + ' tbody').html(html) : $(selector + ' tbody').append(html);
}


function fn_commonInsertCallback(data){
	let retCode = data.retCode;
	if ( retCode > 0 ) {
		alert('저장되었습니다.');
		location.reload();
	}
}

/**
 * 
 * 객체가 비어있을 경우 Return true
 * @param obj
 * @returns
 */
function fn_objValidator(obj){
	let result = false;
	if ( obj === null ) 	return true;
	for (const property in obj) {
		let value = obj[property];
		if ( value === '' || value === undefined )	result = true; 
	}
	return result;
}


function fn_copyObject(data){
	let result = {};
	for ( let property in data) result[property] = data[property];
	return result;
}

/**
 * 테이블 데이터 생성 Version2
 * @returns html
 */
function fn_makeTableRow_V2(data, properties){
	let html = '<tr>';
	properties.forEach(function(property){
		html += '<td>' + fn_basicValidator(data[property]) + '</td>';
	});
	html += '</tr>';
	return html;
}


/**
 * 비어있는 경우 true Return 
 * @param selector
 * @returns
 */
function fn_isEmpty(selector){
	//공백여부 체크 
	let valueCheck = true; 		//벨리데이션 예외 체크
	let processCheck = false;
	$(selector).find('.required').each(function(){
		valueCheck = fn_ElementsValidator($(this));
		if ( ! valueCheck ){
			processCheck = true;
			return false;
		}
	});
	if ( ! valueCheck ) { //필수 입력 값이 비어있을 경우 break
		processCheck = true;
	}
	return processCheck;
}

/**
 * disabled 유무
 * @param selector
 * @param state
 * @returns
 */
function fn_common_initDisabled(selector, state){
	$(selector + ' button').attr('disabled', state);
	$(selector + ' input').attr('disabled', state);
	$(selector + ' textarea').attr('disabled', state);
	$(selector + ' select').attr('disabled', state);
}

/**
 * 무조건 Disabled 항목 잠구기 함수
 * @param selector
 * @returns
 */
function fn_common_initDisabled_v2(selector){
	$(selector + ' .disabledEl').attr('disabled', true);	
}


function fn_createEmptyTableHtml(colspan){
	let html = '';
	if ( colspan > 0 ) {
		html += '<tr>';
		html += '	<td colspan="' + colspan + '">No Data Been found.</td>';
		html += '</tr>';
	}
	return html;
}

/**
 * selector와 html을 받아서 table tbody에 append
 * @param selector
 * @param html
 * @returns
 */
function fn_commonCreateTableRow(selector, html){
	$(selector + ' tbody').html(html);
}


function fn_commonDateRangePickerFormat(date){
	let year = date.getFullYear();
	let month = (1 + date.getMonth());
	let day = date.getDate();
	
	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;
	
	return year + '/' + month + '/' + day;
	
}


function fn_getOneWeekAfterDate(){
	let now = new Date();
	now.setDate(now.getDate() + 7);
	let afterDate = fn_commonDateRangePickerFormat(new Date(now));	//일주일 뒤
	return afterDate;
}

function fn_setOneWeekAfterDate(selector){
	$(selector).val(fn_getOneWeekAfterDate());
}


function fn_commonUnCheckedByName(name){
	$('input[name=' + name + ']').each(function(){
		$(this).attr('checked', false);
	});
}


/**
 * 이벤트 대상 선택자를 받아서 기본 클릭 이벤트 리턴
 * @param selector
 * @returns
 */
function fn_createBasicClickEvent(selector, callback){
	return function(){
		$(selector).removeClass('table-info');
		$(this).attr('class', 'table-info');
		if ( typeof callback != 'undefined' )	callback(); 
	};
}


function fn_setClickEvent(selector, callback){
	$(selector).click(fn_createBasicClickEvent(selector, callback));
}

function fn_setdblClickEvent(selector, callback){
	$(selector).dblclick(fn_createBasicClickEvent(selector, callback));
}

function fn_commonGetRowIndex(selector){
	return $(selector).index();
}


function fn_setElementValue(selector, value){
	let $selector = $(selector);
	let tagName = $selector.prop('tagName');	//태그이름은 prop
	if ( 'INPUT' === tagName ) {
		let type = $selector.attr('type');
		if ( 'text' === type || 'hidden' === type) {
			$selector.val(value);
		}
		else if ( 'radio' === type ) {
			$(selector).each(function(){
				if ( $(this).val() === value ) {
					$(this).prop('checked', true);
					return false;
				}
			});
		}
	}
	else if ( 'TEXTAREA' === tagName ) {
		$selector.val(value);
	}
	else if ( 'SELECT' === tagName ) {
		$selector.val(value).attr('selected', true);
	}
	return ;
}


function fn_setCheckEvent(selector){
	$(selector).change(fn_commonDetectingCheckBox);
}

function fn_commonDetectingCheckBox(){
	let isChecked = $(this).is(':checked');
	let $parent = $(this).closest('tr');
	if ( isChecked ) {
		$parent.removeClass('unchecked');
		$parent.addClass('checked');
	}
	else {
		$parent.removeClass('checked');
		$parent.addClass('unchecked');
	}
}


function fn_commonCodeParser(code){
	switch ( code ) {
	case 'A1': return '신청서';
	case 'A2': return '개인정보처리동의서';
	case 'A' : return '신청';
	case 'Y' : return '승인';
	case 'P' : return '승인';
	case 'N' : return '미신청';
	case 'R' : return '거절';
	case 'RR': return '반려';
	case 'RA': return '교원승인';
	default : return '';
	}
}


/**
 * 공통 모달 사용시
 * 공통 파일 다운로드 사용 시 파일 다운로드 함수 
 * 로우 안에 파일 이름, 파일 경로가 있을 시 사용 가능
 * @param _this
 * @returns
 */
function fn_commonDownload_v1(_this){
	let form = document.querySelector('#modal_downloadForm');
	form.action = '/cmmn/attachFileDownload';
	form.method = 'POST';
	
	let parent = _this.closest('tr');
	document.querySelector('#modal_fileName').value = parent.querySelector('.fileName').value;
	document.querySelector('#modal_filePath').value = parent.querySelector('.filePath').value;
	
	document.querySelector('#modal_downloadForm').submit();
}

/**
 * 공통 모달 사용시
 * 공통 파일 다운로드 사용 시 파일 다운로드 함수 
 * 로우 안에 파일 이름, 파일 경로가 있을 시 사용 가능
 * @param _this
 * @returns
 */
function fn_commonDownload_v2(_this){
	let form = document.querySelector('#modal_downloadForm2');
	form.action = '/cmmn/attachFileDownload';
	form.method = 'POST';
	
	let parent = _this.closest('tr');
	document.querySelector('#download_fileName').value = parent.querySelector('.fileName').value;
	document.querySelector('#download_filePath').value = parent.querySelector('.filePath').value;
	
	document.querySelector('#modal_downloadForm2').submit();
}


/**
 * 공통 파일 다운로드 함수 
 */
function fn_commonFileDownload(name, path){
	let form = document.createElement('form');
	let nameEl = fn_createElement('input', 'hidden', name, 'file_name');
	let pathEl = fn_createElement('input', 'hidden', path, 'file_path');
	document.body.appendChild(form);
	form.append(nameEl);
	form.append(pathEl);
	form.action = '/cmmn/attachFileDownload';
	form.method = 'POST';
	form.submit();
}


function fn_createElement(tagName, type, value, name){
	let element = document.createElement(tagName);
	element.type = type;
	element.value = value;
	element.name = name;
	return element;
}

/**
 * 파일 전송용 formData 
 * @param formSelector
 * @param obj
 * @returns
 */
function fn_commonFileFormData(formSelector, obj){
	let form = $(formSelector)[0];
	let data = new FormData(form);
	
	for ( let property in obj) 	data.append(property, obj[property]);
	return data;
}