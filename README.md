# Rocknblock Вебсайт

Вебсайт сделан на фрейморке WinterCMS, который содержит в себе серверную часть (на php) и фронтовую часть (html, css, javascript). Данная cms обладает большими возможностями для расширения и создания различных плагинов для проекта, а так же интеграции с различными ресурсами.

# Структура

Основная структура проекта заключается в ее темплейте (т.е теме сайта). Для фронтовой части все необходимые ресурсы для работы находятся в папке по пути **themes/rocnblock/vendor**. В данной папке находится основная структура проекта: страницы, js код, scss и изображения.

Для запуска создания страниц проекта необходимо открыть в терминале папку с темплейтом (путь указан выше) и запустить в режиме разработки командой `npm run start`. После этого проект соберется и появится папка **build** в которой содержится готовый проект и страницы к которым можно обратиться.

> Все изменения отслеживаются и автоматически обновляется страница.
> Для доступа к странице используйте прямой путь: например localhost:3000/mypage.html

Структура темплейта следующая:

-   src - находится весь код проекта
-   src/pages - находятся страницы, для создания новой страницы просто в данной папке создайте новую страницу с отличительным наименованием от имеющихся, после чего по прототипу других страниц создайте разметку
-   src/pages/sections - находятся блоки от разных страниц, они линкуются в страницу через метод `include`
-   src/js - находится файл для работы с js
-   src/styles - находятся стили страниц разбирые по файлам, незабудьте добавить новую страницу в файл `style.scss` в самый конец

Чтобы собрать проект выполните команду `npm run build` и папка **build** обновится для прод версии.

> Во время работы может долго запускаться проект - это из-за минификации и конвертации изображений. Просто подождите некоторое время.

## Добавление данных в CMS

В папке **build** теплейта лежат готовые файлы и страницы, чтобы страницы добавились необходимо перенести все ассеты в папку по пути **themes/rocnblock/assets** где для изображений главная папка будет **themes/rocnblock/assets/images/site/** в нее положить папки с изображениями. По аналогии переносите все остальные файлы js/css и так далее.

Теперь необходимо запустить WinterCMS и настроить страницы. Для этого перейдите в админку CMS и создайте обычную страницу, назовите ее необходимым наименованием и выберите темлейт **rocknblock** и сохраните, в **partials** создайте нужные части вашей страницы с указанием папки (посмотите как сделаны уже готовые страницы) например: **metaverse/hero** и добавьте код данной секции из файла со страницей в папке **build**.

Пример:

```
<!-- File Page (CMS->Pages): Ex: mylanding -->
<div class="pg pg-mylanding">
   <!-- Add Page Partial -->
   {% partial 'mylanding/hero' %}
   <!-- Add Page Nav Slider -->
   {% partial 'sections/nav-slider-v2' %}
   <!-- Add Page Main Form -->
   {% partial 'forms/main' %}
</div>
```

```
<!-- File Partial (CMS->Partial): Ex: mylanding/hero -->
<section class="hero">
	<div class="container">
		<div class="block-head">
			<h1 class="title">Hello I'm mylanding Hero</h1>
		</div>
	</div>
</section>
```

## Плагины

В WinterCMS написаны кастомные плагины, которые находятся по пути **root/plugins/**. Основной плагин - **amaryfilo** содержит в себе набор плагинов для сайта (blog и feedbacks), где первый отвечает за блог а второй за отзывы на сайте и интеграцию с CRM.

> Чтобы создавать новые плагины, посмотрите документацию к данной CMS системе.

## Требования

Для работы с проектом необходимо иметь **node** весии **14.x.x** для темплейта по пути **themes/rocnblock/vendor**. В остальном потребуется только настроить саму CMS (смотрите документацию по cms).
