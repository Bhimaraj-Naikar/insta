import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ExpandableText = ({ caption, username, limit = 100 }: { caption: string; username?: string; limit?: number }) => {
  const [expand, setExpand] = useState(false);

  if (!caption) {
    if (!username) return null;
    return <Text style={styles.captionBase}><Text style={styles.username}>{username}</Text></Text>;
  }

  const displayCaption = expand ? caption : caption.slice(0, limit);
  const isTruncated = caption.length > limit;

  return (
    <Text style={styles.captionBase}>
      {username ? <Text style={styles.username}>{username} </Text> : null}
        {displayCaption}
      {isTruncated && !expand && (
        <Text>
          {'... '}
          <Text style={styles.moreLessBtn} onPress={() => setExpand(true)}>more</Text>
        </Text>
        )}
      {expand && (
        <Text style={styles.moreLessBtn} onPress={() => setExpand(false)}> less</Text>
      )}
    </Text>
  )
}

export default ExpandableText

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  captionBase: {
    fontSize: 14,
    color: '#000000', 
    lineHeight: 18,
  },
  username: {
    fontWeight: '700',
    color: '#000000',
  },
  moreLessBtn: {
    color: '#8e8e8e',
    fontSize: 14,
  }
})