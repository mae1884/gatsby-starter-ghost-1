import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const readingTime = readingTimeHelper(post)
    console.log(post)
    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        { post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={ post.feature_image } alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            { post.tags && post.tags.length > 0 && <ul className="tag-list">
                                {post.tags.map(tag => <li key={tag.name}><Link to={`/tag/${tag.slug}/`}>{tag.name}</Link></li>)}
                            </ul>}
                            <h1 className="content-title">{post.title}</h1>
                            <p className="post-excerpt">{post.excerpt}</p>
                            <Link to={`/author/${post.primary_author.slug}`} className="article-byline-content">
                                <img className="author-profile-image" src={post.primary_author.profile_image || '/images/icons/avatar.svg'} alt={post.primary_author.name}/>
                                <div className="article-byline-meta">
                                    <div className="author-name">{post.primary_author.name}</div>
                                    <div>
                                        <time className="byline-meta-date" dateTime={post.published_at}>{post.published_at_pretty}</time>
                                        <span className="byline-reading-time"><span className="bull">•</span> {readingTime}</span>
                                    </div>
                                </div>
                            </Link>
                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
            excerpt: PropTypes.string.isRequired,
            primary_author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                profile_image: PropTypes.string,
                slug: PropTypes.string,
            }).isRequired,
            tags: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string
            }))
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
