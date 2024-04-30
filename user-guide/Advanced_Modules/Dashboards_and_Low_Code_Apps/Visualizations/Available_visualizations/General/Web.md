---
uid: DashboardWeb
---

# Web

This component displays a webpage or a block of static HTML. It can also be used to display a [video thumbnail](#configuring-a-video-thumbnail).

## Configuring the component

- To configure the component as a webpage:

  1. In the *Component* > *Settings* tab, set *Type* to *Webpage*.

  1. In the URL box below this, specify the URL of the webpage.

     > [!NOTE]
     > From DataMiner 10.3.0 [CU14]/10.4.0 [CU2]/10.4.5 onwards<!--RN 38993-->, you can link this component to a feed by [dynamically referencing feed values](xref:Feed_Link) in the URL. However, note that the URL is limited to 2,000 characters.

- To configure the component as a block of HTML:

  1. In the *Component* > *Settings* tab, set *Type* to *Custom HTML*.

  1. In the *HTML* box below this, add the HTML code.

     > [!NOTE]
     > From DataMiner 10.3.0 [CU14]/10.4.0 [CU2]/10.4.5 onwards<!--RN 38993-->, you can link this component to a feed by [dynamically referencing feed values](xref:Feed_Link) in the HTML code. However, note that the HTML code is limited to 100,000 characters and HTML highlighting is disabled from 15,000 characters onwards.

In the *Component* > *Layout* tab, only the default options are available for this component. See [Customizing the component layout](xref:Customize_Component_Layout).

> [!NOTE]
> This component does not allow the use of scripts, buttons or other input controls.

## Configuring a video thumbnail

You can make a Web component display a video stream based on an image URL.

To do so, configure the URL similar to the value of the *Link* shape data field when you [configure a video thumbnail in Visual Overview](xref:Linking_a_shape_to_a_video_thumbnail).
