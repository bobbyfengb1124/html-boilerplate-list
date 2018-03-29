function hasOddNumber(arr) {
    return arr.some(function (item) {
        if (item % 2 !== 0) {
            return true;
        }
    });
}

console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4]));

console.log(hasOddNumber([2, 2, 2, 2, 2, 4]));

//=====================================================================

function hasAZero(num) {
    return num.toString().split('').some(function (item) {
        return item === '0';
    });
}

console.log(hasAZero(3332123213101232321));

console.log(hasAZero(1212121));

//=====================================================================

function hasOnlyOddNumbers(arr) {
    return arr.every(function (item) {
        return (item % 2 !== 0);
    });
}

console.log(hasOnlyOddNumbers([1, 3, 5, 7]));
console.log(hasOnlyOddNumbers([1, 2, 3, 5, 7]));

//=====================================================================

function hasNoDuplicates(arr) {
    return arr.every(function (item) {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    });
}

console.log(hasNoDuplicates([1, 2, 3, 1]));
console.log(hasNoDuplicates([1, 2, 3]));

//=====================================================================

function hasCertainKey(arr, key) {
    return arr.every(function (item) {
        return key in item;
    });
}

var arr = [
    {
        title: "Instructor",
        first: 'Elie',
        last: "Schoppik"
    },
    {
        title: "Instructor",
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        title: "Instructor",
        first: 'Matt',
        last: "Lane"
    },
    {
        title: "Instructor",
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
    ];

console.log(hasCertainKey(arr, 'first')); // true
console.log(hasCertainKey(arr, 'isCatOwner')); // false

//=====================================================================

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (item) {
        return item[key] === searchValue;
    });
}

var arr = [
    {
        title: "Instructor",
        first: 'Elie',
        last: "Schoppik"
    },<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Have and only have 1 archive node -->
<!-- Should exists parameter in TBL_PARAM with appCode + parameterkey + parmeter_type("ARCHIVE") -->
<archive parameterKey="SUP_ARCHIVE_JOB">
	<!-- 1 archiveDefine is 1 archive group, can have 1 to 100-->
	<archiveDefine>
		<!-- have and only have 1 type -->
		<type>
			<name>PARAMETER_PEND</name>
			<!-- Prefix for generated csv file name -->
			<filePrefix>PARAMETER_PENDLOG</filePrefix>
			<description>PARAMETER_PEND</description>
			<appCode>SUF</appCode>
			<!--REC_TYP_CD in COM_ARCH_HIST -->
			<recordTypeCode>S01</recordTypeCode>
		</type>
		<!-- have and only have 1 select -->
		<select id="getTrnLog">
			<!-- have and only have 1 selectClause, sql for query main data, should avoid duplicate column name -->
			<selectClause>
                <![CDATA[
                SELECT appr_by, appr_dt, app_id, created_by,
				       created_dt,
				       effective_date,
				       expiry_date,
				       param_category, param_desc, param_id, param_key, param_pend_sys_num,
				       param_type, param_value, rej_rsn_cd, rmk_txt, st_cd, trn_typ_cd,
				       updated_by, updated_dt,
				       version, wrkflw_num
				  FROM tbl_param_pend
				 WHERE updated_dt < add_months(trunc(sysdate), -1)
            ]]>
			</selectClause>
			<!-- Column for order main data -->
			<recordDateColumn>updated_dt</recordDateColumn>
		</select>
		<!-- have and only have 1 deleteSequence -->
		<deleteSequence>
			<!-- table define for generate delete sql, name is waiting delete table's name -->
			<table name="tbl_param_pend">
				<!-- Condition for delete -->
				<!-- column is column name in table -->
				<!-- property is column name in above sql's result -->
				<!-- jdbcType is type in DB -->
				<!-- javaType is type in JAVA -->
				<primaryKey column="param_pend_sys_num" property="param_pend_sys_num"
					jdbcType="VARCHAR" javaType="String" />
			</table>
		</deleteSequence>
	</archiveDefine>
	<!--<archiveDefine>-->
		<!--<type>-->
			<!--<name>CODETYPE_PEND</name>-->
			<!--<filePrefix>CODETYPE_PENDLOG</filePrefix>-->
			<!--<description>CODETYPE_PEND</description>-->
			<!--<appCode>SUF</appCode>-->
			<!--<recordTypeCode>S02</recordTypeCode>-->
		<!--</type>-->
		<!--<select id="getTrnLog">-->
			<!--<selectClause>-->
                <!--<![CDATA[-->
                <!--SELECT appr_by, appr_dt, app_id, codetype_desc, codetype_id,-->
				       <!--codetype_pend_sys_num, codetype_table, col_codetype_id, col_code_desc,-->
				       <!--col_code_id, col_code_locale, col_code_seq, col_effective_dt,-->
				       <!--col_expiry_dt, col_status, created_by, created_dt, effective_dt,-->
				       <!--expiry_dt, param_category_ind, read_only, rej_rsn_cd, rmk_txt, st_cd,-->
				       <!--tbl_codetype_id, trn_typ_cd, updated_by, updated_dt, version,-->
				       <!--wrkflw_num-->
				  <!--FROM tbl_codetype_pend-->
				 <!--WHERE updated_dt < add_months(trunc(sysdate), -1)-->

            <!--]]>-->
			<!--</selectClause>-->
			<!--<recordDateColumn>updated_dt</recordDateColumn>-->
		<!--</select>-->
		<!--<deleteSequence>-->
			<!--<table name="tbl_codetype_pend">-->
				<!--<primaryKey column="codetype_pend_sys_num" property="codetype_pend_sys_num"-->
					<!--jdbcType="VARCHAR" javaType="String" />-->
			<!--</table>-->
		<!--</deleteSequence>-->
	<!--</archiveDefine>-->
	<!--<archiveDefine>-->
		<!--<type>-->
			<!--<name>CODE_PEND</name>-->
			<!--<filePrefix>CODE_PENDLOG</filePrefix>-->
			<!--<description>CODE_PEND</description>-->
			<!--<appCode>SUF</appCode>-->
			<!--<recordTypeCode>S03</recordTypeCode>-->
		<!--</type>-->
		<!--<select id="getTrnLog">-->
			<!--<selectClause>-->
                <!--<![CDATA[-->
                <!--SELECT appr_by, appr_dt, codetype_id, code_desc, code_id,-->
				       <!--code_int_pend_sys_num, code_seq, created_by, created_dt, effective_dt,-->
				       <!--expiry_dt, locale, parent_codetype_id, parent_code_id, rej_rsn_cd,-->
				       <!--rmk_txt, status, st_cd, tbl_code_int_id, trn_typ_cd, updated_by,-->
				       <!--updated_dt, version, wrkflw_num-->
				  <!--FROM tbl_code_int_pend-->
				 <!--WHERE updated_dt < add_months(trunc(sysdate), -1)-->

            <!--]]>-->
			<!--</selectClause>-->
			<!--<recordDateColumn>updated_dt</recordDateColumn>-->
		<!--</select>-->
		<!--<deleteSequence>-->
			<!--<table name="tbl_code_int_pend">-->
				<!--<primaryKey column="code_int_pend_sys_num" property="code_int_pend_sys_num"-->
					<!--jdbcType="VARCHAR" javaType="String" />-->
			<!--</table>-->
		<!--</deleteSequence>-->
	<!--</archiveDefine>&ndash;&gt;-->

	<archiveDefine>
		<!-- have and only have 1 type -->
		<type>
			<name>PARAMETER</name>
			<!-- Prefix for generated csv file name -->
			<filePrefix>PARAMETERLOG</filePrefix>
			<!--Not Used, but will be validated as part of archiveDefine spec-->
			<description>PARAMETER</description>
			<!-- APP_ID_NUM in COM_ARCH_HIST, used by COM_ARCH_TMP as part of key too-->
			<appCode>SUF</appCode>
			<!--REC_TYP_CD in COM_ARCH_HIST, used by COM_ARCH_TMP as part of key too -->
			<recordTypeCode>S04</recordTypeCode>
		</type>
		<!-- have and only have 1 select -->
		<!--id not used-->
		<select id="getTrnLog">
			<!-- have and only have 1 selectClause, sql for query main data, should avoid duplicate column name -->
			<selectClause>
                <![CDATA[
	                SELECT appr_by, appr_dt, app_id, created_by as p_created_by, created_dt as p_created_dt, edit_dttm,
					       edit_usr_num, effective_date, expiry_date, id, init_dttm,
					       init_usr_num, param_category, param_desc, param_key, param_type,
					       param_value, st_cd, updated_by, updated_dt, version
					  FROM tbl_param M
					 WHERE st_cd = 'I'
					   AND updated_dt < add_months(trunc(sysdate), -2)
            ]]>
			</selectClause>
			<!-- Column for main data order, ASC default -->
			<recordDateColumn>updated_dt</recordDateColumn>
			<!-- When exists furtherSelect, deleteTables is mandatory, otherwise delete by table defined in deleteSequence below -->
			<deleteTables>
				<!-- Which table should be delete in this select -->
				<tableName>tbl_param</tableName>
			</deleteTables>
		</select>
		<!-- have and only have 1 furtherSelect -->
		<furtherSelect>
			<!--id not used-->
			<select id="getTranLogDtl">
				<selectClause>
        		 <![CDATA[
				SELECT appr_by, appr_dt, app_id, created_by as pend_created_by,
				       created_dt as pend_created_dt,
				       effective_date,
				       expiry_date,
				       param_category, param_desc, param_id, param_key, param_pend_sys_num,
				       param_type, param_value, rej_rsn_cd, rmk_txt, st_cd, trn_typ_cd,
				       updated_by, updated_dt,
				       version, wrkflw_num
				  FROM tbl_param_pend P
				 WHERE 1=1
        		 ]]>
				</selectClause>
				<!-- Define the column related to main data, cannot be null -->
				<parameter column="param_id" property="id" jdbcType="VARCHAR"
					javaType="String" />
				<deleteTables>
					<tableName>tbl_param_pend</tableName>
				</deleteTables>
			</select>
		</furtherSelect>
		<!-- have and only have 1 deleteSequence, define sequence and condition for delete -->
		<deleteSequence>
			<!-- table define for generate delete sql, name is waiting delete table's name, need to match deleteTables stated above -->
			<table name="tbl_param_pend">
				<!-- Condition for delete -->
				<!-- column is column name in table -->
				<!-- property is column name in above sql's result -->
				<!-- jdbcType is type in DB -->
				<!-- javaType is type in JAVA -->
				<primaryKey column="param_pend_sys_num" property="param_pend_sys_num"
					jdbcType="VARCHAR" javaType="String" />
			</table>
			<table name="tbl_param">
				<primaryKey column="id" property="id" jdbcType="VARCHAR"
					javaType="String" />
			</table>
		</deleteSequence>
	</archiveDefine>

	<archiveDefine>
		<!-- have and only have 1 type -->
		<type>
			<name>PARAMETER_INBOX</name>
			<!-- Prefix for generated csv file name -->
			<filePrefix>PARAMETERINBOXLOG</filePrefix>
			<!--Not Used, but will be validated as part of archiveDefine spec-->
			<description>PARAMETER COM WORKFLOW INBOX</description>
			<!-- APP_ID_NUM in COM_ARCH_HIST, used by COM_ARCH_TMP as part of key too-->
			<appCode>SUF</appCode>
			<!--REC_TYP_CD in COM_ARCH_HIST, used by COM_ARCH_TMP as part of key too -->
			<recordTypeCode>S04</recordTypeCode>
		</type>
		<!-- have and only have 1 select -->
		<!--id not used-->
		<select id="getTrnLog">
			<!-- have and only have 1 selectClause, sql for query main data, should avoid duplicate column name -->
			<selectClause>
				<![CDATA[
	                SELECT a.id, a.param_category, a.param_key, a.param_value, a.st_cd, a.updated_by, a.updated_dt, a.version,
	                b.param_id, b.wrkflw_num
					  FROM tbl_param a,
					  tbl_param_pend b
					 WHERE a.st_cd = 'I'
					   AND a.updated_dt < add_months(trunc(sysdate), -2)
					   AND a.id = b.param_id
            ]]>
			</selectClause>
			<!-- Column for main data order, ASC default -->
			<recordDateColumn>updated_dt</recordDateColumn>
			<!-- When exists furtherSelect, deleteTables is mandatory, otherwise delete by table defined in deleteSequence below -->
			<deleteTables>
				<!-- Which table should be delete in this select -->
				<tableName>tbl_param</tableName>
			</deleteTables>
		</select>
		<!-- have and only have 1 furtherSelect -->
		<furtherSelect>
			<!--id not used-->
			<select id="getTranLogDtl">
				<selectClause>
					<![CDATA[
				SELECT wrkflw_num, tsk_title_txt, app_nam
				  FROM com_wrkflw_inbox
				 WHERE 1=1
        		 ]]>
				</selectClause>
				<!-- Define the column related to main data, cannot be null -->
				<parameter column="wrkflw_num" property="wrkflw_num" jdbcType="NUMBER"
						   javaType="BigInteger" />
				<deleteTables>
					<tableName>com_wrkflw_inbox</tableName>
				</deleteTables>
			</select>
		</furtherSelect>
		<!-- have and only have 1 deleteSequence, define sequence and condition for delete -->
		<deleteSequence>
			<!-- table define for generate delete sql, name is waiting delete table's name, need to match deleteTables stated above -->
			<table name="com_wrkflw_inbox">
				<!-- Condition for delete -->
				<!-- column is column name in table -->
				<!-- property is column name in above sql's result -->
				<!-- jdbcType is type in DB -->
				<!-- javaType is type in JAVA -->
				<primaryKey column="wrkflw_num" property="wrkflw_num"
							jdbcType="NUMBER" javaType="BigInteger" />
			</table>
			<table name="tbl_param">
				<primaryKey column="id" property="id" jdbcType="VARCHAR"
							javaType="String" />
			</table>
		</deleteSequence>
	</archiveDefine>

	<!--<archiveDefine>-->
		<!--<type>-->
			<!--<name>CODETYPE</name>-->
			<!--<filePrefix>CODETYPELOG</filePrefix>-->
			<!--<description>CODETYPE</description>-->
			<!--<appCode>SUF</appCode>-->
			<!--<recordTypeCode>S05</recordTypeCode>-->
		<!--</type>-->
		<!--<select id="getTrnLog">-->
			<!--<selectClause>-->
                <!--<![CDATA[-->
	                <!--SELECT appr_by, appr_dt, app_id, codetype_desc, codetype_id, codetype_table,-->
					       <!--col_codetype_id, col_code_desc, col_code_id, col_code_locale,-->
					       <!--col_code_seq, col_effective_dt, col_expiry_dt, col_status, created_by,-->
					       <!--created_dt, edit_dttm, edit_usr_num, effective_dt, expiry_dt, id,-->
					       <!--init_dttm, init_usr_num, param_category_ind, read_only, st_cd,-->
					       <!--updated_by, updated_dt, version-->
					  <!--FROM tbl_codetype-->
					 <!--WHERE st_cd = 'I'-->
					   <!--AND updated_dt < add_months(trunc(sysdate), -1)-->
					   <!--AND param_category_ind = 'N'-->
            <!--]]>-->
			<!--</selectClause>-->
			<!--<recordDateColumn>updated_dt</recordDateColumn>-->
			<!--<deleteTables>-->
				<!--<tableName>tbl_codetype</tableName>-->
			<!--</deleteTables>-->
		<!--</select>-->
		<!--<furtherSelect>-->
			<!--<select id="getTranLogDtl">-->
				<!--<selectClause>-->
        		 <!--<![CDATA[-->
				<!--SELECT appr_by, appr_dt, codetype_id, code_desc, code_id, code_seq,-->
				       <!--created_by, created_dt, edit_dttm, edit_usr_num, effective_dt,-->
				       <!--expiry_dt, id code_int_system_id, init_dttm, init_usr_num, locale, parent_codetype_id,-->
				       <!--parent_code_id, status, st_cd, updated_by, updated_dt, version-->
				  <!--FROM TBL_CODE_INT-->
				 <!--WHERE 1=1 -->
        		 <!--]]>-->
				<!--</selectClause>-->
				<!--<parameter column="codetype_id" property="id" jdbcType="VARCHAR"-->
					<!--javaType="String" />-->
				<!--<deleteTables>-->
					<!--<tableName>tbl_code_int</tableName>-->
				<!--</deleteTables>-->
			<!--</select>-->
		<!--</furtherSelect>-->

		<!--<deleteSequence>-->
			<!--<table name="tbl_code_int">-->
				<!--<primaryKey column="id" property="code_int_system_id"-->
					<!--jdbcType="VARCHAR" javaType="String" />-->
			<!--</table>-->
			<!--<table name="tbl_codetype">-->
				<!--<primaryKey column="id" property="id" jdbcType="VARCHAR"-->
					<!--javaType="String" />-->
			<!--</table>-->
		<!--</deleteSequence>-->
	<!--</archiveDefine>-->

</archive>
    {
        title: "Instructor",
        first: 'Tim',
        last: "Garcia",
        isCatOwner: true
    },
    {
        title: "Instructor",
        first: 'Matt',
        last: "Lane"
    },
    {
        title: "Instructor",
        first: 'Colt',
        last: "Steele",
        isCatOwner: true
    }
    ];

console.log(hasCertainValue(arr, 'title', 'Instructor')); // true
console.log(hasCertainValue(arr, 'first', 'Elie')); // false
