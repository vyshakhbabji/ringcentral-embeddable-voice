webpackJsonp([2],{1003:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(616),r=l(n);t.default=(a={},(0,o.default)(a,r.default.internalError,"内部エラーにより、ログインに失敗しました。後でもう一度やり直してください。"),(0,o.default)(a,r.default.accessDenied,"アクセスが拒否されました。サポートにお問い合わせください。"),(0,o.default)(a,r.default.sessionExpired,"セッションの有効期限が切れました。サインインしてください。"),a)},1015:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(336),r=l(n);t.default=(a={},(0,o.default)(a,r.default.noToNumber,"有効な電話番号を入力してください。"),(0,o.default)(a,r.default.noAreaCode,"7桁の国内電話番号を使用するには、{areaCodeLink}を設定してください。"),(0,o.default)(a,r.default.specialNumber,"緊急サービスまたは特別なサービスの番号へのダイヤルはサポートされていません。"),(0,o.default)(a,r.default.connectFailed,"接続に失敗しました。後でもう一度やり直してください。"),(0,o.default)(a,r.default.internalError,"内部エラーにより、接続できません。後でもう一度やり直してください。"),(0,o.default)(a,r.default.notAnExtension,"この内線番号は存在しません。"),(0,o.default)(a,r.default.networkError,"ネットワークの問題により、接続できません。後でもう一度やり直してください。"),(0,o.default)(a,r.default.noRingoutEnable,"お使いの内線は、デスクトップアプリを使用した通話発信が許可されています。\n    他の通話オプションに切り替えたい場合は、\n    アップグレードについてアカウント管理者にお問い合わせください。"),(0,o.default)(a,"areaCode","市外局番"),(0,o.default)(a,"telus911","緊急ダイヤルはサポートされていません。"),a)},1027:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={logging:"ログ記録中...",logCall:"通話のログ記録",editLog:"ログの編集",select:"一致する記録の選択",OnHold:"保留中",Ringing:"呼び出し中",CallConnected:"通話接続済み",unknownUser:"不明なユーザー",unknownNumber:"匿名",unavailable:"利用不可",viewDetails:"詳細の表示",addEntity:"新規作成",addLog:"ログ",text:"テキスト",call:"通話",missedCall:"不在",inboundCall:"着信",outboundCall:"発信"}},1039:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={noActiveCalls:"アクティブな通話はありません",noRecords:"結果が見つかりません。"}},1051:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(617),r=l(n);t.default=(a={},(0,o.default)(a,r.default.saveSuccess,"設定が正常に保存されました。"),(0,o.default)(a,r.default.saveSuccessWithSoftphone,"設定が正常に保存されました。お使いのコンピューターに{brand} for Desktopがインストールされていることを確認してください。"),(0,o.default)(a,r.default.firstLogin,"[通話]セクションで、発信方法を選択してください。[地域]セクションで国と市外局番(使用可能な場合)を指定して位置情報をお知らせいただけると、アプリを使用した国内通話が可能になります。"),(0,o.default)(a,r.default.firstLoginOther,"[通話]セクションで、発信方法を選択してください。"),(0,o.default)(a,r.default.permissionChanged,"アクセス許可が最近変更されました。{Link}の順に移動して、[通話]のオプションを確認してください。"),(0,o.default)(a,r.default.phoneNumberChanged,"電話番号情報が最近変更されました。{Link}の順に移動して、[通話]のオプションを確認してください。"),(0,o.default)(a,"link","[設定] > [通話]"),(0,o.default)(a,r.default.webphonePermissionRemoved,"アクセス許可が変更されたため、ブラウザーを使用した通話はできません。詳細については、アカウント管理者にお問い合わせください。"),(0,o.default)(a,r.default.emergencyCallingNotAvailable,"緊急サービスまたは特別なサービスの番号へのダイヤルはサポートされていません。緊急時は、従来の有線電話または携帯電話を使用して、緊急電話番号に電話してください。"),a)},1063:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(263),r=l(n);t.default=(a={title:"通話",save:"保存"},(0,o.default)(a,r.default.softphone,"{brand} for Desktop"),(0,o.default)(a,r.default.myphone,"自分の{brand}電話"),(0,o.default)(a,r.default.otherphone,"その他の電話"),(0,o.default)(a,r.default.customphone,"カスタム電話"),(0,o.default)(a,r.default.browser,"ブラウザー"),(0,o.default)(a,"makeCallsWith","通話発信に使用する電話"),(0,o.default)(a,"ringoutHint","最初に自分の場所で自身を呼び出した後、通話相手に接続する"),(0,o.default)(a,"myLocationLabel","自分の場所"),(0,o.default)(a,"press1ToStartCallLabel","通話接続前に「1」をダイヤルするように指示するメッセージを受け取る"),(0,o.default)(a,r.default.browser+"Tooltip","通話の発着信にコンピューターのマイクロフォンとスピーカーを使用するには、このオプションを使用します。"),(0,o.default)(a,r.default.softphone+"Tooltip","通話の発着信に{brand} for Desktopアプリを使用するには、このオプションを使用します。"),(0,o.default)(a,r.default.myphone+"Tooltip","{brand}電話を使用して電話をかけるには、このオプションを使用します。"),(0,o.default)(a,r.default.myphone+"Tooltip1","電話をかけた場合、最初に自分の{brand}電話が鳴ってから、通話相手の電話が鳴ります。"),(0,o.default)(a,r.default.otherphone+"Tooltip","{brand}の内線に追加した自宅電話や携帯電話など、他の電話を使用して電話をかけるには、このオプションを使用します。"),(0,o.default)(a,r.default.otherphone+"Tooltip1","電話をかけた場合、最初にこの電話が鳴ってから、通話相手の電話が鳴ります。"),(0,o.default)(a,r.default.customphone+"Tooltip","以下のフィールドに有効な電話番号を入力することで任意の電話を使用して電話をかけるには、このオプションを使用します。"),(0,o.default)(a,r.default.customphone+"Tooltip1","電話をかけた場合、最初にこの電話が鳴ってから、通話相手の電話が鳴ります。"),a)},1075:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={from:"送信元",to:"宛先",enterNameOrNumber:"番号または名前の入力...",typeMessage:"メッセージの入力...",send:"送信"}},1087:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(210),d=l(a),o=u(916),n=l(o);t.default=(0,d.default)({},n.default.requireAditionalNumbers,"追加のダイヤルイン番号を選択してください。")},1099:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(210),d=l(a),o=u(618),n=l(o);t.default=(0,d.default)({},n.default.disconnected,"ネットワーク接続が切断されます。")},1111:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(615),r=l(n),f=u(262),i=l(f);t.default=(a={extensionLabel:"内線",directLabel:"ダイレクト",emailLabel:"Eメール",call:"通話",text:"テキスト"},(0,o.default)(a,r.default.available,"利用可能"),(0,o.default)(a,r.default.busy,"取り込み中"),(0,o.default)(a,r.default.offline,"非表示"),(0,o.default)(a,i.default.doNotAcceptAnyCalls,"応答不可"),a)},1123:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={contactDetails:"連絡先の詳細"}},1135:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={logging:"ログ記録中...",logCall:"通話のログ記録",editLog:"ログの編集",select:"一致する記録の選択",OnHold:"保留中",Ringing:"呼び出し中",CallConnected:"通話接続済み",unknownUser:"不明なユーザー",unknownNumber:"匿名",unavailable:"利用不可",viewDetails:"詳細の表示"}},1147:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={noContacts:"記録が見つかりません。"}},1159:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={all:"すべて",company:"会社",personal:"個人"}},1171:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={searchPlaceholder:"検索..."}},1183:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={typeMessage:"メッセージの入力...",send:"送信"}},1195:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={account:"アカウント",contact:"連絡先",lead:"リード",chooseEntity:"エンティティタイプを選択してください",create:"作成"}},1207:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={eula:"エンドユーザーライセンス契約",serviceTerms:"サービスの利用規約"}},1219:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={feedbackHeader:"フィードバックを送信",back:"戻る",revert:"元に戻す",instruction:"お客様のフィードバックは重要です。アプリの使用に関する問題、機能のリクエストやバグの報告など、いつでも喜んでサポートいたします。",fillForm:"以下のフォームに記入し、次をクリックしてください ",useMailBox:" またはメールボックスを利用して、次にリクエストをお寄せください ",email:"メールアドレス",reply:"（返信先）",emailPlaceHolder:"ronald.app@ringcentral.com",feedbackTopic:"フィードバックのトピック",topicPlaceHolder:"いずれかを選択してください",bugReport:"バグを報告",featureRequest:"機能に関するリクエスト",others:"その他",subject:"件名",subjectPlaceHolder:"どんなサポートが必要ですか",description:"詳細",descriptionPlaceHolder:"できるだけ詳しくご記入ください",send:"フィードバックを送信"}},1231:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={flipHeader:"通話のフリップ先...",flip:"フリップ",complete:"フリップの完了"}},1243:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={forward:"転送",cancel:"キャンセル",customNumber:"カスタム番号"}},1255:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={DirectNumber:"ダイレクト",MainCompanyNumber:"代表",CompanyNumber:"会社",CompanyFaxNumber:"FAX",Blocked:"ブロック済み",AdditionalCompanyNumber:"会社",ForwardedCompanyNumber:"転送元",from:"発信元"}},1267:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={forward:"転送",reply:"返信",ignore:"無視",toVoicemail:"ボイスメールへ",answer:"電話に出る",answerAndEnd:"応答して終了",answerAndHold:"応答して保留"}},1279:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={en:"英語",ja:"日本語",fr:"フランス語",de:"ドイツ語",es:"スペイン語",it:"イタリア語",pt:"ポルトガル語"}},1291:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={loginButton:"サインイン",version:"バージョン"}},1303:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(917),r=l(n);t.default=(a={},(0,o.default)(a,r.default.emptyTopic,"会議のトピックを入力してください。"),(0,o.default)(a,r.default.noPassword,"会議のパスワードを入力してください。"),(0,o.default)(a,r.default.scheduledSuccess,"ミーティングの日時が設定されました。"),a)},1315:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(211),r=l(n);t.default=(a={addLog:"ログ",editLog:"ログの編集",viewDetails:"詳細の表示",addEntity:"新規作成",call:"通話",conversation:"会話",groupConversation:"グループ会話",text:"テキスト",voiceMessage:"ボイスメッセージ"},(0,o.default)(a,r.default.voiceMail,"ボイスメール"),(0,o.default)(a,"mark","未読にする"),(0,o.default)(a,"unmark","既読にする"),(0,o.default)(a,"delete","削除"),(0,o.default)(a,"faxSent","FAX送信済み"),(0,o.default)(a,"faxReceived","FAX受信済み"),(0,o.default)(a,"pages","ポケットベル"),(0,o.default)(a,"preview","表示"),(0,o.default)(a,"download","ダウンロード"),a)},1327:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(264),r=l(n);t.default=(a={},(0,o.default)(a,r.default.sendSuccess,"送信が成功しました。"),(0,o.default)(a,r.default.sendError,"メッセージの送信時に問題が発生しました。"),(0,o.default)(a,r.default.numberValidateError,"電話番号の検証エラー。"),(0,o.default)(a,r.default.textEmpty,"送信するテキストを入力してください。"),(0,o.default)(a,r.default.noPermission,"メッセージを送信するためのアクセス許可がありません。"),(0,o.default)(a,r.default.senderEmpty,"お使いの電話番号から送信用の電話番号を選択してください。"),(0,o.default)(a,r.default.recipientsEmpty,"有効な受信者番号を入力してください。"),(0,o.default)(a,r.default.textTooLong,"テキストが長すぎます。上限は1,000文字です"),(0,o.default)(a,r.default.multipartTextTooLong,"テキストが長すぎます。上限は5,000文字です"),(0,o.default)(a,r.default.noAreaCode,"7桁の国内電話番号を使用するには、{areaCodeLink}を設定してください。"),(0,o.default)(a,r.default.connectFailed,"接続に失敗しました。後でもう一度やり直してください。"),(0,o.default)(a,r.default.internalError,"内部エラーにより、接続できません。後でもう一度やり直してください。"),(0,o.default)(a,r.default.notAnExtension,"この内線番号は存在しません。"),(0,o.default)(a,r.default.networkError,"ネットワークの問題により、接続できません。後でもう一度やり直してください。"),(0,o.default)(a,r.default.senderNumberInvalid,"組織外部の受信者にメッセージを送信するためのアクセス許可がありません。アップグレードについてRingCentralアカウント管理者にお問い合わせください。"),(0,o.default)(a,r.default.notSmsToExtension,"代表電話番号が付いた内線番号に送信することはできません。内線番号に送信する場合は、内線番号だけを入力してください。"),(0,o.default)(a,r.default.internationalSMSNotSupported,"国際電話番号へのSMS送信はサポートされていません。"),(0,o.default)(a,"areaCode","市外局番"),(0,o.default)(a,r.default.recipientNumberInvalids,"有効な電話番号を入力してください。"),(0,o.default)(a,r.default.noInternalSMSPermission,"メッセージを送信するためのアクセス許可がありません。アップグレードについてRingCentralアカウント管理者にお問い合わせください。"),a)},1339:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(210),d=l(a),o=u(918),n=l(o);t.default=(0,d.default)({},n.default.deleteFailed,"内部サーバーエラーが原因で、ボイスメールを削除できません。")},1351:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(211),r=l(n);t.default=(a={search:"検索...",noMessages:"メッセージなし",noSearchResults:"一致する記録が見つかりません",title:"メッセージ",composeText:"テキストの作成"},(0,o.default)(a,r.default.all,"すべて"),(0,o.default)(a,r.default.voiceMail,"音声"),(0,o.default)(a,r.default.text,"テキスト"),(0,o.default)(a,r.default.fax,"FAX"),a)},1363:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={cancel:"キャンセル",confirm:"確認"}},1375:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={offlineMode:"オフラインモード"}},1387:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(615),r=l(n),f=u(262),i=l(f);t.default=(a={},(0,o.default)(a,r.default.available,"利用可能"),(0,o.default)(a,r.default.busy,"取り込み中"),(0,o.default)(a,r.default.offline,"非表示"),(0,o.default)(a,i.default.doNotAcceptAnyCalls,"応答不可"),a)},1399:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={status:"ステータス",acceptQueueCalls:"通話キューの通話を承諾する"}},1411:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={Home:"自宅",Mobile:"モバイル",Work:"職場"}},1423:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={rateExceeded:"要求の上限を超えました。アプリは{ttl}秒後に再開します。"}},1435:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={to:"宛先",enterNameOrNumber:"名前または番号の入力"}},1447:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(619),r=l(n);t.default=(a={region:"地域"},(0,o.default)(a,r.default.saveSuccess,"設定が正常に保存されました。"),(0,o.default)(a,r.default.dialingPlansChanged,"前の地域は、お使いのアカウントでもうサポートされません。\n    新しい{regionSettingsLink}を確認してください。"),(0,o.default)(a,"regionSettings","地域の設定"),(0,o.default)(a,r.default.areaCodeInvalid,"有効な市外局番を入力してください。"),a)},1459:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={save:"保存",title:"地域",NAOnlyMessage:"市外局番を設定してください。これは、国内通話に使用されます。",MultiWithNAMessage:"お客様の地域の国および市外局番を設定してください。これは、国内通話および電話番号の形式に使用されます。",MultiWithoutNAMessage:"お住まいの国を選択してください。これは、国内通話および電話番号の形式に使用されます。",country:"国",areaCode:"市外局番",areaCodePlaceholder:"市外局番の入力"}},1471:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={cancel:"キャンセル",reply:"返信",onMyWay:"移動中です",customMessage:"カスタムメッセージ",callMeBackIn:"折り返しお電話ください",willCallYouBackIn:"折り返しお電話します",min:"分",hours:"時間",days:"日"}},1483:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=u(210),d=l(a),o=u(337),n=l(o);t.default=(0,d.default)({},n.default.invalidTier,"お使いのエディションでは、{application}の統合がサポートされていません。{brand}のエディションをアップグレードするには、アカウント担当者にお問い合わせください。")},1495:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={save:"保存"}},1507:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={region:"地域",calling:"通話",logout:"ログアウト",version:"バージョン",settings:"設定",clickToDial:"クリックダイヤル",autoCreateLog:"通話ログの自動作成",autoCreateSMSLog:"SMSログの自動作成",autoLogCalls:"通話の自動ログ記録",autoLogSMS:"SMSの自動ログ記録",clickToSMS:"クリックSMS",clickToDialSMS:"クリックダイヤル/SMS",audio:"オーディオ",language:"言語",feedback:"フィードバック",userGuide:"新着情報"}},1519:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={to:"宛先：",transferTo:"転送先",blindTransfer:"転送",enterNameOrNumber:"番号の入力"}},1531:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={download:"ダウンロード",play:"再生",pause:"一時停止"}},1543:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(620),r=l(n);t.default=(a={},(0,o.default)(a,r.default.connectFailed,"ウェブ電話サーバーとの接続が失敗しました。"),(0,o.default)(a,r.default.connected,"ウェブ電話は登録されています。"),(0,o.default)(a,r.default.browserNotSupported,"ブラウザーを使用した通話は、Chromeのみでサポートされています。"),(0,o.default)(a,r.default.webphoneCountOverLimit,"登録できるウェブ電話は最大5台です。"),(0,o.default)(a,r.default.notOutboundCallWithoutDL,"お使いの内線は、現在、ブラウザーを使用した通話発信を許可されていません。アップグレードについてアカウント担当者にお問い合わせください。"),(0,o.default)(a,r.default.getSipProvisionError,"メッセージを送信するためのアクセス許可がありません。"),(0,o.default)(a,r.default.toVoiceMailError,"内部エラーにより、通話をボイスメールに送信できません"),(0,o.default)(a,r.default.muteError,"現在、通話をミュートできません。"),(0,o.default)(a,r.default.holdError,"現在、通話を保留できません。"),(0,o.default)(a,r.default.flipError,"通話をフリップできません。後でもう一度やり直してください。"),(0,o.default)(a,r.default.recordError,"現在、通話を録音できません。エラーコード：{errorCode}"),(0,o.default)(a,r.default.recordDisabled,"申し訳ありません。お使いのアカウントでは、通話を録音する機能はサポートされていません。アカウント管理者にお問い合わせください。"),(0,o.default)(a,r.default.transferError,"通話を転送できません。後でもう一度やり直してください。"),(0,o.default)(a,"webphoneUnavailable","{error}。サーバーに再接続しています。エラーが解決しない場合は、このエラーを{brandName}サポートに報告してください。"),(0,o.default)(a,"errorCode","内部エラーコード：{errorCode}"),(0,o.default)(a,"occurs","内部エラーコード"),a)},1554:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={webphoneUnavailable:"ウェブ電話は利用不可"}},1566:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={activeCall:"アクティブな通話"}},1578:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={unknown:"不明",anonymous:"匿名",activeCalls:"アクティブな通話"}},1590:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={title:"履歴"}},1602:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={unknown:"不明",anonymous:"匿名",activeCall:"アクティブな通話"}},1614:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={419:"ラテンアメリカ",AR:"アルゼンチン",AT:"オーストリア",BH:"バーレーン",BR:"ブラジル",BG:"ブルガリア",CA:"カナダ",CL:"チリ",CN:"中国",HR:"クロアチア",CY:"キプロス",CZ:"チェコ共和国",DK:"デンマーク",DO:"ドミニカ共和国",EE:"エストニア",FI:"フィンランド",FR:"フランス",DE:"ドイツ",HK:"香港",HU:"ハンガリー",IE:"アイルランド",IL:"イスラエル",IN:"インド",IT:"イタリア",JP:"日本",LV:"ラトビア",LT:"リトアニア",LU:"ルクセンブルク",MY:"マレーシア",MX:"メキシコ",NL:"オランダ",NO:"ノルウェー",PA:"パナマ",PH:"フィリピン",PL:"ポーランド",PT:"ポルトガル",RO:"ルーマニア",SK:"スロバキア",SI:"スロベニア",ES:"スペイン",SE:"スウェーデン",CH:"スイス",TR:"トルコ",GB:"英国",AU:"オーストラリア",GE:"ジョージア",ID:"インドネシア",KE:"ケニア",NG:"ナイジェリア",PK:"パキスタン",ZA:"南アフリカ",KR:"韓国",SG:"シンガポール",TW:"台湾",UA:"ウクライナ",US:"米国",VN:"ベトナム",BE:"ベルギー",BJ:"ベナン",SV:"エルサルバドル",GH:"ガーナ",GR:"ギリシャ",GN:"ギニア",NZ:"ニュージーランド",PE:"ペルー",PR:"プエルトリコ"}},1626:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(919),r=l(n);t.default=(a={},(0,o.default)(a,r.default.account,"アカウント"),(0,o.default)(a,r.default.contact,"連絡先"),(0,o.default)(a,r.default.rcContact,"{brand}"),(0,o.default)(a,r.default.lead,"リード"),(0,o.default)(a,r.default.opportunity,"営業案件"),(0,o.default)(a,r.default.systemUser,"システムユーザー"),a)},1638:function(e,t,u){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,d=u(210),o=l(d),n=u(3210),r=l(n);t.default=(a={},(0,o.default)(a,r.default.business,"勤務先電話"),(0,o.default)(a,r.default.extension,"内線番号"),(0,o.default)(a,r.default.home,"自宅の番号"),(0,o.default)(a,r.default.mobile,"携帯電話"),(0,o.default)(a,r.default.phone,"電話"),(0,o.default)(a,r.default.unknown,"電話タイプが不明"),(0,o.default)(a,r.default.company,"会社の代表番号"),(0,o.default)(a,r.default.direct,"ダイレクトナンバー"),a)},3210:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(12),a=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=new a.default(["business","extension","home","mobile","phone","unknown","company","direct"])},930:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={sureToDeleteVoiceMail:"ボイスメールを削除しますか？",doNotAskAgain:"次回から通知しない"}},942:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={hide:"非表示",end:"終了",keypad:"キーパッド"}},954:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={logging:"ログ記録中...",logCall:"通話のログ記録",editLog:"ログの編集",select:"一致する記録の選択",OnHold:"保留中",Ringing:"呼び出し中",CallConnected:"通話接続済み",unknownUser:"不明なユーザー",unknownNumber:"匿名",unavailable:"利用不可",viewDetails:"詳細の表示",addEntity:"新規作成",addLog:"ログ",text:"テキスト",call:"通話",addContact:"連絡先の追加",missedCall:"不在",inboundCall:"着信",outboundCall:"発信",from:"発信元",to:"宛先",hangup:"通話を終了する",accept:"同意する",toVoicemail:"ボイスメールへ転送"}},966:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={unmute:"ミュート解除",mute:"ミュート",keypad:"キーパッド",hold:"保留",onHold:"保留中",park:"パーク",stopRecord:"停止",record:"録音",add:"追加",transfer:"転送",flip:"フリップ"}},978:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={noActiveCalls:"アクティブな通話はありません",currentCall:"現在の通話",ringCall:"呼び出し中の通話",onHoldCall:"保留中の通話",otherDeviceCall:"他のデバイスで進行中の通話"}},991:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={title:"オーディオ",dialButtonVolume:"ダイヤルボタンの音量",ringtoneVolume:"着信音の音量",callVolume:"通話の音量",muteCalls:"通話をミュート",outputDevice:"出力デバイス",inputDevice:"入力デバイス",micPermission:"マイクロフォンのアクセス許可"}}});