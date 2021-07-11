import React, { } from 'react';
import styled from 'styled-components';
import {mainColor, subColor} from '../constants/styles';


const StyledWrapper = styled.div`
	font-size: 18px;
	@media screen and (max-width: 700px) {
        font-size: 14px; 
    }
`

const StyledH1 = styled.h1`
	font-size: 22px;
	font-weight: 600;
	margin: 30px 0 10px;

	@media screen and (max-width: 700px) {
        font-size: 18px; 
    }
`

const StyledUL = styled.ul`
	padding-left: 40px;

	margin: 0;
	}
	list-style-type: none;
	li {
		text-indent: -10px;
		&:before {
		  content: "-  ";
		  text-indent: -5px;
		}
	}
	
	@media screen and (max-width: 700px) {
        padding-left: 20px; 
    }
`

const StyledP = styled.p`
	@media screen and (max-width: 700px) {
        font-size: 14px; 
    }
`



const PersonalDataPolicy = () => {
    return (
    	<div className="page-section">
            <div className="section-frame">
            	<StyledWrapper>
                <h1 className="page-title">Политика обработки персональных данных</h1>

				<StyledP>&nbsp;</StyledP>
				<StyledH1>1. Общие положения</StyledH1>
				<StyledP>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ &laquo;О персональных данных&raquo; (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые&nbsp;Ваккером Рудольфом Владимировичем&nbsp;(далее &ndash; Оператор).</StyledP>
				<StyledP>1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</StyledP>
				<StyledP>1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее &ndash; Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта&nbsp;https://swapie.ru.</StyledP>
				<StyledH1>2. Основные понятия, используемые в Политике</StyledH1>
				<StyledP>2.1. Автоматизированная обработка персональных данных &ndash; обработка персональных данных с помощью средств вычислительной техники.</StyledP>
				<StyledP>2.2. Блокирование персональных данных &ndash; временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).</StyledP>
				<StyledP>2.3. Веб-сайт &ndash; совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу&nbsp;https://swapie.ru.</StyledP>
				<StyledP>2.4. Информационная система персональных данных &mdash; совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств.</StyledP>
				<StyledP>2.5. Обезличивание персональных данных &mdash; действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.</StyledP>
				<StyledP>2.6. Обработка персональных данных &ndash; любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</StyledP>
				<StyledP>2.7. Оператор &ndash; государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.</StyledP>
				<StyledP>2.8. Персональные данные &ndash; любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта&nbsp;https://swapie.ru.</StyledP>
				<StyledP>2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, - персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее - персональные данные, разрешенные для распространения).</StyledP>
				<StyledP>2.10. Пользователь &ndash; любой посетитель веб-сайта&nbsp;https://swapie.ru.</StyledP>
				<StyledP>2.11. Предоставление персональных данных &ndash; действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.</StyledP>
				<StyledP>2.12. Распространение персональных данных &ndash; любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.</StyledP>
				<StyledP>2.13. Трансграничная передача персональных данных &ndash; передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.</StyledP>
				<StyledP>2.14. Уничтожение персональных данных &ndash; любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.</StyledP>
				<StyledH1>3. Основные права и обязанности Оператора</StyledH1>
				<StyledP>3.1. Оператор имеет право:</StyledP>
				<StyledP>&ndash; получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;</StyledP>
				<StyledP>&ndash; в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;</StyledP>
				<StyledP>&ndash; самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.</StyledP>
				<StyledP>3.2. Оператор обязан:</StyledP>
				<StyledP>&ndash; предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;</StyledP>
				<StyledP>&ndash; организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;</StyledP>
				<StyledP>&ndash; отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;</StyledP>
				<StyledP>&ndash; сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 30 дней с даты получения такого запроса;</StyledP>
				<StyledP>&ndash; публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;</StyledP>
				<StyledP>&ndash; принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;</StyledP>
				<StyledP>&ndash; прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных Законом о персональных данных;</StyledP>
				<StyledP>&ndash; исполнять иные обязанности, предусмотренные Законом о персональных данных.</StyledP>
				<StyledH1>4. Основные права и обязанности субъектов персональных данных</StyledH1>
				<StyledP>4.1. Субъекты персональных данных имеют право:</StyledP>
				<StyledP>&ndash; получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок ее получения установлен Законом о персональных данных;</StyledP>
				<StyledP>&ndash; требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;</StyledP>
				<StyledP>&ndash; выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;</StyledP>
				<StyledP>&ndash; на отзыв согласия на обработку персональных данных;</StyledP>
				<StyledP>&ndash; обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных;</StyledP>
				<StyledP>&ndash; на осуществление иных прав, предусмотренных законодательством РФ.</StyledP>
				<StyledP>4.2. Субъекты персональных данных обязаны:</StyledP>
				<StyledP>&ndash; предоставлять Оператору достоверные данные о себе;</StyledP>
				<StyledP>&ndash; сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.</StyledP>
				<StyledP>4.3. Лица, передавшие Оператору недостоверные сведения о себе, либо сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с законодательством РФ.</StyledP>
				<StyledH1>5. перечень персональных данных</StyledH1>
				<h2>5.1. Оператор может обрабатывать следующие персональные данные пользователя:</h2>
				<StyledUL>
				<li>Фамилия, имя, отчество.</li>
				<li>Электронный адрес.</li>
				<li>Номера телефонов.</li>
				<li>Год, месяц, дата и место рождения.</li>
				<li>Адреса доставки.</li>
				<li>Пароль.</li>
				<li>План подписки.</li>
				<li>История заказов и оплаты.</li>
				<li>Переписки со службой поддержки.</li>
				<li>Маркетинговые предпочтения и согласия, которые предоставляет субъект персональных данных.</li>
				<li>Сведения о семейном положении и составе семьи, а также возраст, имена и дни рождения детей.</li>
				<li>Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов &laquo;cookie&raquo;) с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).</li>
				<li>Электронные данные (HTTP-заголовки, IP-адрес, файлы cookie, веб-маяки/пиксельные теги, данные об идентификаторе браузера, информация об аппаратном и программном обеспечении, данные сети wi-fi)</li>
				<li>Дата и время осуществления доступа к веб-сайту.</li>
				<li>Информация о Вашей активности во время использования веб-сайта.</li>
				<li>Информация о геолокации</li>
				</StyledUL>
				<StyledP>5.2. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.</StyledP>
				<StyledP>5.3. Обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, интимной жизни, Оператором не осуществляется.</StyledP>
				<StyledP>5.4. Обработка персональных данных, разрешенных для распространения, из числа специальных категорий персональных данных, указанных в ч. 1 ст. 10 Закона о персональных данных, допускается, если соблюдаются запреты и условия, предусмотренные ст. 10.1 Закона о персональных данных.</StyledP>
				<StyledP>5.5. Согласие Пользователя на обработку персональных данных, разрешенных для распространения, оформляется отдельно от других согласий на обработку его персональных данных. При этом соблюдаются условия, предусмотренные, в частности, ст. 10.1 Закона о персональных данных. Требования к содержанию такого согласия устанавливаются уполномоченным органом по защите прав субъектов персональных данных.</StyledP>
				<StyledP>5.5.1 Согласие на обработку персональных данных, разрешенных для распространения, Пользователь предоставляет Оператору непосредственно.</StyledP>
				<StyledP>5.5.2 Оператор обязан в срок не позднее трех рабочих дней с момента получения указанного согласия Пользователя опубликовать информацию об условиях обработки, о наличии запретов и условий на обработку неограниченным кругом лиц персональных данных, разрешенных для распространения.</StyledP>
				<StyledP>5.5.3 Передача (распространение, предоставление, доступ) персональных данных, разрешенных субъектом персональных данных для распространения, должна быть прекращена в любое время по требованию субъекта персональных данных. Данное требование должно включать в себя фамилию, имя, отчество (при наличии), контактную информацию (номер телефона, адрес электронной почты или почтовый адрес) субъекта персональных данных, а также перечень персональных данных, обработка которых подлежит прекращению. Указанные в данном требовании персональные данные могут обрабатываться только Оператором, которому оно направлено.</StyledP>
				<StyledP>5.11.4 Согласие на обработку персональных данных, разрешенных для распространения, прекращает свое действие с момента поступления Оператору требования, указанного в п. 5.11.3 настоящей Политики в отношении обработки персональных данных.</StyledP>
				<StyledH1>6. Принципы обработки персональных данных</StyledH1>
				<StyledP>6.1. Обработка персональных данных осуществляется на законной и справедливой основе.</StyledP>
				<StyledP>6.2. Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.</StyledP>
				<StyledP>6.3. Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.</StyledP>
				<StyledP>6.4. Обработке подлежат только персональные данные, которые отвечают целям их обработки.</StyledP>
				<StyledP>6.5. Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.</StyledP>
				<StyledP>6.6. При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых случаях и актуальность по отношению к целям обработки персональных данных.</StyledP>
				<StyledP>6.7. Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных. Обрабатываемые персональные данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.</StyledP>
				<StyledH1>7. Цели обработки персональных данных</StyledH1>
				<StyledP>7.1. Цель обработки персональных данных Пользователя:</StyledP>
				<StyledP>&ndash;&nbsp;для лучшего понимания, как Пользователь взаимодействует с веб-сайтом;</StyledP>
				<StyledP>- для совершенствования и улучшения веб-сайта в интересах всех пользователей;</StyledP>
				<StyledP>- осуществление связи с Пользователем для направления уведомлений, запросов, электронных писем и информации, относящейся к работе веб-сайта, выполнения соглашений с Пользователем;</StyledP>
				<StyledP>- персонализация рекламы и предложений с учетом предпочтений Пользователя, и другой Персональной информации;</StyledP>
				<StyledP>&ndash;&nbsp;предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте https://swapie.ru.</StyledP>
				<StyledP>7.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты&nbsp;privacy@thismywebsite&middot;com&nbsp;с пометкой &laquo;Отказ от уведомлений о новых продуктах и услугах и специальных предложениях&raquo;.</StyledP>
				<StyledP>7.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</StyledP>
				<StyledH1>8. Правовые основания обработки персональных данных</StyledH1>
				<StyledP>8.1. Правовыми основаниями обработки персональных данных Оператором являются:</StyledP>
				<StyledP>&ndash; федеральные законы, иные нормативно-правовые акты в сфере защиты персональных данных;</StyledP>
				<StyledP>&ndash; согласия Пользователей на обработку их персональных данных, на обработку персональных данных, разрешенных для распространения.</StyledP>
				<StyledP>8.2. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте&nbsp;https://swapie.ru&nbsp;или направленные Оператору посредством электронной почты. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</StyledP>
				<StyledP>8.3. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов &laquo;cookie&raquo; и использование технологии JavaScript).</StyledP>
				<StyledP>8.4. Субъект персональных данных самостоятельно принимает решение о предоставлении его персональных данных и дает согласие свободно, своей волей и в своем интересе.</StyledP>
				<StyledH1>9. Условия обработки персональных данных</StyledH1>
				<StyledP>9.1. Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.</StyledP>
				<StyledP>9.2. Обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей.</StyledP>
				<StyledP>9.3. Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве.</StyledP>
				<StyledP>9.4. Обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем.</StyledP>
				<StyledP>9.5. Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.</StyledP>
				<StyledP>9.6. Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее &ndash; общедоступные персональные данные).</StyledP>
				<StyledP>9.7. Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.</StyledP>
				<StyledH1>10. Порядок сбора, хранения, передачи и других видов обработки персональных данных</StyledH1>
				<StyledP>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</StyledP>
				<StyledP>10.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</StyledP>
				<StyledP>10.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных данных дано согласие Оператору на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.</StyledP>
				<StyledP>10.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора&nbsp;privacy@thismywebsite&middot;com&nbsp;с пометкой &laquo;Актуализация персональных данных&raquo;.</StyledP>
				<StyledP>10.4. Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим законодательством.<br /> Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора&nbsp;privacy@thismywebsite&middot;com&nbsp;с пометкой &laquo;Отзыв согласия на обработку персональных данных&raquo;.</StyledP>
				<StyledP>10.5. Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и обрабатывается указанными лицами (Операторами) в соответствии с их Пользовательским соглашением и Политикой конфиденциальности. Субъект персональных данных и/или Пользователь обязан самостоятельно своевременно ознакомиться с указанными документами. Оператор не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.</StyledP>
				<StyledP>10.6. Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных законодательством РФ.</StyledP>
				<StyledP>10.7. Оператор при обработке персональных данных обеспечивает конфиденциальность персональных данных.</StyledP>
				<StyledP>10.8. Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных.</StyledP>
				<StyledP>10.9. Условием прекращения обработки персональных данных может являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных или отзыв согласия субъектом персональных данных, а также выявление неправомерной обработки персональных данных.</StyledP>
				<StyledH1>11. Перечень действий, производимых Оператором с полученными персональными данными</StyledH1>
				<StyledP>11.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.</StyledP>
				<StyledP>11.2. Оператор осуществляет автоматизированную обработку персональных данных с получением и/или передачей полученной информации по информационно-телекоммуникационным сетям или без таковой.</StyledP>
				<StyledH1>12. Трансграничная передача персональных данных</StyledH1>
				<StyledP>12.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.</StyledP>
				<StyledP>12.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.</StyledP>
				<StyledH1>13. Конфиденциальность персональных данных</StyledH1>
				<StyledP>Оператор и иные лица, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.</StyledP>
				<StyledH1>14. Заключительные положения</StyledH1>
				<StyledP>14.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты&nbsp;privacy@thismywebsite&middot;com.</StyledP>
				<StyledP>14.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.</StyledP>
				<StyledP>14.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу&nbsp;https://swapie.ru/privacy/.</StyledP>
				<StyledP>&nbsp;</StyledP>
				</StyledWrapper>
        	</div>
        </div>
    );
};

export default PersonalDataPolicy;